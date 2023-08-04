import { Inject, Injectable } from '@nestjs/common'; 
import { ICrudProductRepository } from '../domain/repository/product.interface';
import { ProductRepository } from '../domain/repository/product.repository';
import { ProductDto } from '../infrastructure/dto/products.dto';
import { IUseCaseGetProductByNameService } from './get-product-by-name-use-case.interface';

@Injectable()
export class GetProductByNameUseCaseService implements IUseCaseGetProductByNameService {
	constructor(@Inject(ProductRepository) private readonly productRepository: ICrudProductRepository) {}
   
    getProductByName(name: any): Promise<ProductDto[]> {
        const product = this.productRepository.productByName(name);
        return product;
    }
    
     
	 
}
