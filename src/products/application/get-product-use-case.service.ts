import { Inject, Injectable } from '@nestjs/common'; 
import { ICrudProductRepository } from '../domain/repository/product.interface';
import { ProductRepository } from '../domain/repository/product.repository';
import { ProductDto } from '../infrastructure/dto/products.dto';
import { IUseCaseGetProductService } from './get-product-use-case.interface';

@Injectable()
export class GetProductUseCaseService implements IUseCaseGetProductService {
	constructor(@Inject(ProductRepository) private readonly productRepository: ICrudProductRepository) {}
    
    product(id: any): Promise<ProductDto> {
        const product = this.productRepository.product(id);
        return product;
    }
	 
}
