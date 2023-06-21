import { Body, Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { AuthGuard } from 'src/guards/authGuard';

@Controller('product')
@UseGuards(AuthGuard) //Guard con alcance de controlador
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('/')
  // @UseGuards(AuthGuard)//Guard con alcance de metodo
  products() {
    return this.productService.products();
  }

  @Get('/products-by-category')
  async getPrByCategory(@Body() categoryBody: any) {
    return this.productService.getProductByCategoryId(categoryBody);
  }

  @Get(':id')
  async getProduct(@Param('id') id: number) {
    const response = await this.productService.getProduct(id);
    return response
  }
}
