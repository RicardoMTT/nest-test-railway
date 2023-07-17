import { ProductDto } from '../infrastructure/dto/products.dto';

export interface IUseCaseGetProductByCategoryService {
	product(categoryId:any): Promise<ProductDto[]>;
}

export interface IResponse {
	message: string;
	code: number;
}
