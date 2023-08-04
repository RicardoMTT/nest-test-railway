import { ProductDto } from '../infrastructure/dto/products.dto';

export interface IUseCaseGetProductByNameService {
	getProductByName(name:any): Promise<ProductDto[]>;
}

export interface IResponse {
	message: string;
	code: number;
}
