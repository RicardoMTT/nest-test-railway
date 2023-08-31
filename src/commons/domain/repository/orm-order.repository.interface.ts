import { IGetOrderRepositoryDto } from "../dto/order-repository.dto";

export interface IOrmOrderRepository {
	createOrder(order:any): Promise<IGetOrderRepositoryDto>;
}
