import { Inject, Injectable } from '@nestjs/common'; 
import { IUseCaseProductService } from './product-use-case.interface';
import { ICrudProductRepository } from '../domain/repository/product.interface';
import { ProductRepository } from '../domain/repository/product.repository';
import { ProductDto } from '../infrastructure/dto/products.dto';
import { PaginationDto } from '../infrastructure/dto/pagination.dto';

@Injectable()
export class ProductUseCaseService implements IUseCaseProductService {
	constructor(@Inject(ProductRepository) private readonly productRepository: ICrudProductRepository) {}
    categories(): Promise<any> {
        throw new Error('Method not implemented.');
    }
    
    async products(pagination:PaginationDto): Promise<ProductDto[]> {
        const products = await this.productRepository.products(pagination);
		return products.map((product) => product);
    }

	 
}
