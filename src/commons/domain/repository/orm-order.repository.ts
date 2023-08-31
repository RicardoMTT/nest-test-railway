import { Injectable, NotFoundException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { OrderEntity } from '../entities/order.entity';
import { IOrmOrderRepository } from './orm-order.repository.interface';
import { OrmOrderDetailRepository } from './orm-order-detail.repository';
import { OrmProductRepository } from './orm-product.repository';
import { IGetOrderRepositoryDto } from '../dto/order-repository.dto';

@Injectable()
export class OrmOrderRepository
  extends Repository<OrderEntity>
  implements IOrmOrderRepository
{
  constructor(
    dataSource: DataSource,
    private orderDetailRepository: OrmOrderDetailRepository,
    private productRepository:OrmProductRepository) {
    super(OrderEntity, dataSource.createEntityManager());
  }

  async createOrder(order): Promise<IGetOrderRepositoryDto> {

    const currentDate = new Date(); 
    const dateString = currentDate.toISOString();
    
    const newOrder = await this.create({
      date: dateString,
      shipping_details: order.shipping_details,
      total:order.total,
      subtotal:order.subtotal
    });

    const newOrderEntity = await this.save(newOrder);
    const order_items = order.items;

    for (const order_item of order_items) {
      const product = await this.productRepository.findOne({
        where:{
          id:order_item.productId
        }
      })
      if (product) {
        const newOrderDetail = await this.orderDetailRepository.create({
          order:newOrderEntity,
          product:order_item.productId,
          quantity:order_item.quantity,
          price:order_item.price
        });
        await this.orderDetailRepository.save(newOrderDetail); 
     
      }else{
        //  Eliminar la orden creada si el producto no se encuentra
        // await this.orderDetailRepository.remove(newOrderEntity);
        throw new NotFoundException(`El producto con ID ${order_item.productId} no fue encontrado`);
      }
    }

    return {
      id:newOrder.id.toString(),
      date:newOrder.date,
      shipping_details:newOrder.shipping_details,
      total:newOrder.total,
      subtotal:newOrder.subtotal
    };
  }
}
