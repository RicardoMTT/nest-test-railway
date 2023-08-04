import { PaginationDto } from 'src/products/infrastructure/dto/pagination.dto';
import { IProductRepositoryModel } from '../models/product-repository.model';

export interface ICrudProductRepository {
	products(pagination:PaginationDto): Promise<IProductRepositoryModel[]>;
	product(id: any): Promise<IProductRepositoryModel>;
	productByCategory(id: any): Promise<IProductRepositoryModel[]>;
	productByName(name: any): Promise<IProductRepositoryModel>;
}
