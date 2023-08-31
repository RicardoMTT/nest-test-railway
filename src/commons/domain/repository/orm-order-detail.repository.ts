import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { OrderDetailEntity } from '../entities/order-details.entity';

@Injectable()
export class OrmOrderDetailRepository extends Repository<OrderDetailEntity> {
  constructor(dataSource: DataSource) {
    super(OrderDetailEntity, dataSource.createEntityManager());
  }
}
