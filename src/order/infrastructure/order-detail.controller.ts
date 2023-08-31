import { Body, Controller, Inject, Post } from '@nestjs/common';
import { IUseCaseCreateOrderService } from '../application/create-order-use-case.interface';
import { CreateOrderUseCaseService } from '../application/create-order-use-case.service';
import { OrderDetailDto } from 'src/dto/order-detail.dto';

@Controller('order-detail')
export class OrderDetailController {
  constructor(
    @Inject(CreateOrderUseCaseService)
    private readonly _categoryService: IUseCaseCreateOrderService,
  ) {}

  @Post('/store')
  async store(@Body() data: OrderDetailDto) {
    return this._categoryService.createOrder(data);
  }
}
