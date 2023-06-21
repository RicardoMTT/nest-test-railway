import { Body, Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('/')
  products() {
    return this.productService.products();
  }

  @Get('/products-by-category')
  async getPrByCategory(@Body() categoryBody: any) {
    return this.productService.getProductByCategoryId(categoryBody);
  }
}
