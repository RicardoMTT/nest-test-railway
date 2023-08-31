export interface IOrderRepositoryDto {
	shipping_details:string;
    date: string;
	total: number;
	subtotal: number;
}

export interface IGetOrderRepositoryDto extends IOrderRepositoryDto {
	id: string;
}
