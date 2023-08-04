import { Inject, Injectable } from '@nestjs/common'; 
import { ICrudProductRepository } from './product.interface';
import { IProductRepositoryModel } from '../models/product-repository.model';
import { OrmProductRepository } from 'src/commons/domain/repository/orm-product.repository';
import { IOrmProductRepository } from 'src/commons/domain/repository/orm-product.repository.interface';
import { PaginationDto } from 'src/products/infrastructure/dto/pagination.dto';

@Injectable()
export class ProductRepository implements ICrudProductRepository {
	constructor(
		@Inject(OrmProductRepository)
		private readonly ormProductRepository: IOrmProductRepository 
	) {}
	
	async productByName(name: any): Promise<IProductRepositoryModel[]> {
		const product = await this.ormProductRepository.productByName(name);
		return product;
	}
	
	async productByCategory(categoryId: any): Promise<IProductRepositoryModel[]> {
		const product = await this.ormProductRepository.productByCategory(categoryId);
		return product;
	}
	
	async product(id: any): Promise<IProductRepositoryModel> {
		const product = await this.ormProductRepository.product(id);
		return product;
	}
	
    async products(pagination:PaginationDto): Promise<IProductRepositoryModel[]> {
        const allProducts = await this.ormProductRepository.products(pagination);
		return allProducts.map((product) => ({
			id: product.id,
			name: product.name,
			descripcion: product.descripcion,
			price: product.price
		}));
    }

	 
}
