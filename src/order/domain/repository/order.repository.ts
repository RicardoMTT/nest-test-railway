import { Inject, Injectable } from "@nestjs/common";
import { ICrudOrderRepository } from "./order.interface";
import { OrmOrderRepository } from "src/commons/domain/repository/orm-order.repository";
import { IOrmOrderRepository } from "src/commons/domain/repository/orm-order.repository.interface";
import { IOrderRepositoryModel } from "../models/order-repository.model";

//Se comunica con la base de datos
@Injectable()
export class OrderRepository implements ICrudOrderRepository {
    
    //Se va a acceder al repository a traves de la interface
    constructor(
        @Inject(OrmOrderRepository)
		private readonly ormOrderRepository: IOrmOrderRepository
    ){

    }

    async createOrder(order:any): Promise<IOrderRepositoryModel> {        
        const newOrder = await this.ormOrderRepository.createOrder(order);
		return {
            id:Number(newOrder.id),
            order_date:newOrder.date,
            shipping_details:newOrder.shipping_details,
            total:newOrder.total,
            subtotal:newOrder.subtotal
        };
    }

}