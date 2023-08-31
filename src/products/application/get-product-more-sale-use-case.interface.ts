import { ProductDto } from '../infrastructure/dto/products.dto';

export interface IUseCaseGetProductMoreSaleService {
	getProductMoreSale(): Promise<ProductDto>;
}

export interface IResponse {
	message: string;
	code: number;
}
