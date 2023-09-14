import { Inject, Injectable } from '@nestjs/common'; 
import { ICrudProductRepository } from '../domain/repository/product.interface';
import { ProductRepository } from '../domain/repository/product.repository';
import { ProductDto } from '../infrastructure/dto/products.dto';
import { IUseCaseGetProductByCategoryService } from './get-product-by-category.interface';
import { PaginationDto } from '../infrastructure/dto/pagination.dto';

@Injectable()
export class GetProductByCategoryUseCaseService implements IUseCaseGetProductByCategoryService {
	constructor(@Inject(ProductRepository) private readonly productRepository: ICrudProductRepository) {}
    
    async product(paginationDto: PaginationDto): Promise<ProductDto[]> {
        const product = await this.productRepository.productByCategory(paginationDto);
        return product;
    }
	 
}
