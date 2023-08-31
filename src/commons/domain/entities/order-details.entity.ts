import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderEntity } from "./order.entity";
import { ProductEntity } from "./product.entity";


@Entity()
export class OrderDetailEntity{

    @PrimaryGeneratedColumn()
    id:number;  
    
    @Column()
    quantity:number;

    @Column()
    price:number;

    @ManyToOne(()=>OrderEntity,(orderEntity)=>orderEntity.orderDetailEntity)
    order:OrderEntity;

    @ManyToOne(()=>ProductEntity,(productEntity)=>productEntity.orderDetailEntity)
    product:ProductEntity;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;
}