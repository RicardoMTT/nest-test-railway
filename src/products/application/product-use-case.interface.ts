import { PaginationDto } from '../infrastructure/dto/pagination.dto';
import { ProductDto } from '../infrastructure/dto/products.dto';

export interface IUseCaseProductService {
	products(pagination:PaginationDto): Promise<ProductDto[]>;
	categories(): Promise<any>; 
}

export interface IResponse {
	message: string;
	code: number;
}
