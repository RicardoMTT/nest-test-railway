
export interface IUseCaseCreateOrderService {
	createOrder(orders:any): Promise<any[]>;
}

export interface IResponse {
	message: string;
	code: number;
}
