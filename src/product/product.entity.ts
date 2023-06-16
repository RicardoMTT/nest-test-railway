import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn('increment')
    id:string;

    @Column({length:20})
    name:string;


    @Column({type:'boolean',default:false})
    active:boolean;

    @CreateDateColumn()
    createdOn:Date

}