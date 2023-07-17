import { IProductRepositoryModel } from '../models/product-repository.model';

export interface ICrudCategoryRepository {
	categories(): Promise<any[]>;
	// saveProducts(newProduct: ISaveProductRepositoryModel): Promise<void>;
}
