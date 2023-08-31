import { Inject, Injectable } from '@nestjs/common'; 
import { ICrudProductRepository } from '../domain/repository/product.interface';
import { ProductRepository } from '../domain/repository/product.repository';
import { ProductDto } from '../infrastructure/dto/products.dto';
import { IUseCaseGetProductMoreSaleService } from './get-product-more-sale-use-case.interface';

@Injectable()
export class GetProductMoreSaleUseCaseService implements IUseCaseGetProductMoreSaleService {
	constructor(@Inject(ProductRepository) private readonly productRepository: ICrudProductRepository) {}
    
    getProductMoreSale(): Promise<ProductDto> {        
        const product = this.productRepository.getProductMoreSale();
        return product;
    }
  	 
}
