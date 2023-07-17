import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
import { CategoryEntity } from './category.entity';
   
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
  }
  