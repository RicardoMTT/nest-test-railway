import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn('increment')
    id:string;

    @Column({length:20})
    name:string;

    @Column({length:120})
    email:string;

    @Column({length:120})
    password:string;

    @Column({type:'boolean',default:false})
    active:boolean;

    @CreateDateColumn()
    createdOn:Date

}