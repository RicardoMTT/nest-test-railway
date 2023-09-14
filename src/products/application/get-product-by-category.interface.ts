import { PaginationDto } from '../infrastructure/dto/pagination.dto';
import { ProductDto } from '../infrastructure/dto/products.dto';

export interface IUseCaseGetProductByCategoryService {
	product(paginationDto:PaginationDto): Promise<ProductDto[]>;
}

export interface IResponse {
	message: string;
	code: number;
}
