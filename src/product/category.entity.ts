import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";


@Entity()
export class Category{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    /*
        Esta parte de la expresión indica la propiedad en la entidad Product que se utiliza 
        para establecer la relación con la categoría. En este caso, se asume que la entidad Product 
        tiene una propiedad llamada category, que representa la categoría a la que pertenece el producto.
    */
    @OneToMany(()=>Product,(product)=>product.category)
    product:Product;
}