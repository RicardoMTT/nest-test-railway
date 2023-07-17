import { ProductDto } from '../infrastructure/dto/products.dto';

export interface IUseCaseGetProductService {
	product(id:any): Promise<ProductDto>;
}

export interface IResponse {
	message: string;
	code: number;
}
