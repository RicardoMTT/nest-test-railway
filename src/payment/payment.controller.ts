import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
@Controller('payment')
export class PaymentController {
  constructor(private configService: ConfigService) {}

  @Post('/create-order')
  async getData(@Body() products: any) {
    const orders = {
      intent: 'CAPTURE',
      purchase_units: products,
      application_context: {
        brand_name: 'My store',
        landing_page: 'NO_PREFERENCE',
        user_action: 'PAY_NOW',
        return_url: `http://localhost:4200/#/capture-order`,
        cancel_url: `http://localhost:4200`,
      },
    };
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    const {
      data: { access_token },
    } = await axios.post(
      `${this.configService.get<string>('PAYPAL_API')}/v1/oauth2/token`,
      params,
      {
        auth: {
          username: this.configService.get<string>('PAYPAL_USERNAME'),
          password: this.configService.get<string>('PAYPAL_PASSWORD'),
        },
      },
    );

    try {
      const response = await axios.post(
        `${this.configService.get<string>('PAYPAL_API')}/v2/checkout/orders`,
        orders,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      );
      return {
        link: response.data.links[1].href,
      };
    } catch (error) {
      console.log(error);
    }
  }

  @Get('/capture-order/:token')
  async captureOrder(@Param('token') token: any) {
    const response = await axios.post(
      `${this.configService.get<string>(
        'PAYPAL_API',
      )}/v2/checkout/orders/${token}/capture`,
      {},
      {
        auth: {
          username: this.configService.get<string>('PAYPAL_USERNAME'),
          password: this.configService.get<string>('PAYPAL_PASSWORD'),
        },
      },
    );
    return {
      ok: true,
      message: 'payed',
      response: response.data,
    };
  }
}
