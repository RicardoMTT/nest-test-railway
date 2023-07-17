
export interface IUseCaseCategoryService {
	categories(): Promise<any>;
}

export interface IResponse {
	message: string;
	code: number;
}
