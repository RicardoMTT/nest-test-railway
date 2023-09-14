import { Injectable } from '@nestjs/common';
import { DataSource, Like, Repository } from 'typeorm';
import { IGetProductRepositoryDto } from '../dto/product-repository.dto';
import { IOrmProductRepository } from './orm-product.repository.interface';
import { ProductEntity } from '../entities/product.entity';
import { PaginationDto } from 'src/products/infrastructure/dto/pagination.dto';

@Injectable()
export class OrmProductRepository
  extends Repository<ProductEntity>
  implements IOrmProductRepository
{
  constructor(dataSource: DataSource) {
    super(ProductEntity, dataSource.createEntityManager());
  }
  async getProductMoreSale(): Promise<IGetProductRepositoryDto> {
    /*
    Los 3 productos mas vendidos
    SELECT p.*,sum(od.quantity) as totalQuantity
    FROM testdb.product_entity p
      INNER JOIN testdb.order_detail_entity as od
    ON	p.id = od.productId
      group by p.id 
      ORDER BY
          totalQuantity DESC
    LIMIT 3;
    */
    const query = `
        SELECT productId, SUM(quantity) AS totalQuantity
        FROM testdb.order_detail_entity
        GROUP BY productId
        LIMIT 1;
      `;
    const result = await this.query(query);
     // Verifica si hay un resultado de la consulta
     if (result.length > 0) {
      const productId = result[0].productId;

      // Consulta el producto correspondiente al productId obtenido
      const product = await this.product(productId);

      // Agrega el producto al resultado y devuelve
      return {
        ...result[0],
        product,
      };
    } else {
      return null; // No se encontró ningún resultado
    }
  }
  async productByName(name: any): Promise<IGetProductRepositoryDto[]> {
    const product = await this.find({
      where: {
        name:Like(`%${name}%`)
      }
    }); 
    return product;
  }
  
  async productByCategory(paginationDto: PaginationDto): Promise<IGetProductRepositoryDto[]> {    
    const { page, limit } = paginationDto;
    const offset = (page - 1) * limit;
    const product = await this.find({
      where: {
        category:{
          id:paginationDto.categoryId
        }
      },
      skip: offset,
      take:limit
    }); 
    return product;
  }
  async product(id: any): Promise<IGetProductRepositoryDto> {
    return await this.findOne({
      where: {
        id: id,
      },
    });
  }
  async products(pagination:PaginationDto): Promise<IGetProductRepositoryDto[]> {       
    const { page, limit } = pagination;
    const offset = (page - 1) * limit;

    // The better way but , for this, I need to change the response type of this function
    const [result, total] = await this.findAndCount(
      {
          take: 5, 
          skip:3
      }
    );
    
    return await this.find({
      skip: offset,
      take:limit
    });
  }

}
