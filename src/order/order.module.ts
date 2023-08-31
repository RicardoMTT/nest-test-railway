import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from 'src/commons/domain/entities/order.entity';
import { OrderDetailEntity } from 'src/commons/domain/entities/order-details.entity';
import { OrderDetailController } from './infrastructure/order-detail.controller';
import { CreateOrderUseCaseService } from './application/create-order-use-case.service';
import { OrmOrderRepository } from 'src/commons/domain/repository/orm-order.repository';
import { OrderRepository } from './domain/repository/order.repository';
import { OrmOrderDetailRepository } from 'src/commons/domain/repository/orm-order-detail.repository';
import { OrmProductRepository } from 'src/commons/domain/repository/orm-product.repository';
 

@Module({
	imports: [TypeOrmModule.forFeature([OrderEntity,OrderDetailEntity])],
	controllers: [OrderDetailController],
	providers: [
		CreateOrderUseCaseService,
		OrmOrderRepository,
		OrderRepository,
		OrmOrderDetailRepository,
		OrmProductRepository
	],
})
export class OrderModule {}
