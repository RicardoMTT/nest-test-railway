export interface IProductRepositoryModel {
	id: string;
	name: string;
	descripcion: string;
	price: number;
}

// export type ISaveProductRepositoryModel = Omit<IProductRepositoryModel, 'productId'>;
