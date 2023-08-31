import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { OrderDetailEntity } from './order-details.entity';
   
  @Entity()
  export class ProductEntity {
    @PrimaryGeneratedColumn('increment')
    id: string;
  
    @Column({ length: 20 })
    name: string;
  
    @ManyToOne(() => CategoryEntity, (category) => category.product)
    category: CategoryEntity;
  
    @Column({ length: 120 })
    descripcion: string;
  
    @Column()
    price: number;
  
    @Column({ type: 'boolean', default: false })
    active: boolean;
  
    @CreateDateColumn()
    createdOn: Date;

    //if value is more than 0 , the product has discount
    @Column()
    discount: number;

    @Column({ length: 120 })
    imageUrl: string;

    @OneToMany(()=>OrderDetailEntity,(orderDetailEntity)=>orderDetailEntity.order)
    orderDetailEntity:OrderDetailEntity;
  }
  