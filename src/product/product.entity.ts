import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from './category.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column({ length: 20 })
  name: string;

  @ManyToOne(() => Category, (category) => category.product)
  category: Category;

  @Column({ length: 120 })
  descripcion: string;

  @Column()
  price: number;

  @Column({ type: 'boolean', default: false })
  active: boolean;

  @CreateDateColumn()
  createdOn: Date;
}
