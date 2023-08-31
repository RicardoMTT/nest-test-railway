import { Inject, Injectable } from '@nestjs/common';
import { IUseCaseCreateOrderService } from './create-order-use-case.interface';
import { ICrudOrderRepository } from '../domain/repository/order.interface';
import { OrderRepository } from '../domain/repository/order.repository';

@Injectable()
export class CreateOrderUseCaseService implements IUseCaseCreateOrderService {
  constructor(
    @Inject(OrderRepository)
    private readonly orderRepository: ICrudOrderRepository,
  ) {}

  async createOrder(order: any): Promise<any> {    
    const newOrder = await this.orderRepository.createOrder(order);
    return newOrder;
  }
}
