import {
  Controller,
  Get,
  Inject,
  Param,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { IUseCaseProductService } from '../application/product-use-case.interface';
import { ProductUseCaseService } from '../application/product-use-case.service';
import { IUseCaseGetProductService } from '../application/get-product-use-case.interface';
import { GetProductUseCaseService } from '../application/get-product-use-case.service';
import { IUseCaseGetProductByCategoryService } from '../application/get-product-by-category.interface';
import { GetProductByCategoryUseCaseService } from '../application/get-product-by-category.service';
import { PaginationDto } from './dto/pagination.dto';
import { GetProductByNameUseCaseService } from '../application/get-product-by-name-use-case.service';
import { IUseCaseGetProductByNameService } from '../application/get-product-by-name-use-case.interface';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject(ProductUseCaseService)
    private readonly _productService: IUseCaseProductService,
    @Inject(GetProductUseCaseService)
    private readonly _getProductService: IUseCaseGetProductService,
    @Inject(GetProductByCategoryUseCaseService)
    private readonly _getProductByCategoryUseCaseService: IUseCaseGetProductByCategoryService,
    @Inject(GetProductByNameUseCaseService)
    private readonly _getProductByNameUseCaseService: IUseCaseGetProductByNameService
  ) {}

  // limit = cuantos elementos quieres mostrar por pagina
  @Get('/')
  async products(
    @Query(new ValidationPipe({ transform: true })) pagination: PaginationDto,
  ) {
    const pagination2: PaginationDto = {
      page: pagination.page,
      limit: pagination.limit,
    };
    const response = await this._productService.products(pagination2);
    return response;
  }

  @Get(':id')
  async product(@Param('id') id: number) {
    const response = await this._getProductService.product(id);
    return response;
  }

  @Get('/products-by-category/:id')
  async getProductByCategory(@Param('id') id: number) {
    return this._getProductByCategoryUseCaseService.product(id);
  }

  @Get('/products-by-term/:term')
  async getProductByTerm(@Param('term') term: string) {
    console.log(term);
    
    return this._getProductByNameUseCaseService.getProductByName(term);
  }
}
