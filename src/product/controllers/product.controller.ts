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

  @Get('/products-by-category/:id')
  async getPrByCategory(@Param('id') id: number) {
     console.log(id);
     
    return this.productService.getProductByCategoryId(id);
  }

  @Get(':id')
  async getProduct(@Param('id') id: number) {
    console.log(id);
    
    const response = await this.productService.getProduct(id);
    return response
  }

  @Get('/products-by-term/:term')
  async getProductByTerm(@Param('term') term: string) {
    console.log(term);
    const response = await this.productService.getProductByTerm(term);
    return response
  }
}
