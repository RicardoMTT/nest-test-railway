import { PaginationDto } from 'src/products/infrastructure/dto/pagination.dto';
import { IGetProductRepositoryDto } from '../dto/product-repository.dto';

export interface IOrmProductRepository {
	products(pagination:PaginationDto): Promise<IGetProductRepositoryDto[]>;

	product(id:any):Promise<IGetProductRepositoryDto>;

	productByCategory(id:any):Promise<IGetProductRepositoryDto[]>;
	
	productByName(name:any):Promise<IGetProductRepositoryDto[]>;
	
	getProductMoreSale():Promise<IGetProductRepositoryDto>;
}
