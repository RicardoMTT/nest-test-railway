export interface IProductRepositoryDto {
	name:string;
    descripcion: string;
	price: number;
	active:boolean;
}

export interface IGetProductRepositoryDto extends IProductRepositoryDto {
	id: string;
}
