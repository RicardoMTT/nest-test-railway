import { IOrderRepositoryModel } from "../models/order-repository.model";

export interface ICrudOrderRepository {
	createOrder(order): Promise<IOrderRepositoryModel>;
}
