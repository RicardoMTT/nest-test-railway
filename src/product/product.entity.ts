import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn('increment')
    id:string;

    @Column({length:20})
    name:string;

    @Column({length:20})
    idCategory:string;

    @Column({length:120})
    descripcion:string;

    @Column()
    price:number;

    @Column({type:'boolean',default:false})
    active:boolean;

    @CreateDateColumn()
    createdOn:Date

}