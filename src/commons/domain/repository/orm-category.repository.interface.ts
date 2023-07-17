import { IGetCategoryRepositoryDto } from "../dto/category-repository";

export interface IOrmCategoryRepository {
	categories(): Promise<IGetCategoryRepositoryDto[]>;

}
