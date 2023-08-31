import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductEntity } from "./product.entity";


@Entity()
export class CommentEntity{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    content:string;

    @ManyToOne(()=>ProductEntity,(productEntity)=>productEntity.commentEntity)
    product:ProductEntity;

}