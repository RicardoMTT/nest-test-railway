import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderDetailEntity } from "./order-details.entity";


@Entity()
export class OrderEntity{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    date:string;

    @Column()
    shipping_details:string;

    // Por ahora el total y subtotal tendran el mismo valor, a no ser que le agreguen descuento, en ese caso el total seria menor al subtotal
    @Column()
    total:number;
    
    @Column()
    subtotal:number;

    @OneToMany(()=>OrderDetailEntity,(orderDetailEntity)=>orderDetailEntity.order)
    orderDetailEntity:OrderDetailEntity;
    
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;
}