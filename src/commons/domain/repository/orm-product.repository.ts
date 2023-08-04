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
  async productByName(name: any): Promise<IGetProductRepositoryDto> {
    const product = await this.findOne({
      where: {
        name:Like(`%${name}%`)
      }
    }); 
    return product;
  }
  
  async productByCategory(id: any): Promise<IGetProductRepositoryDto[]> {
    
    const product = await this.find({
      where: {
        category:{
          id
        }
      }
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
    console.log(pagination);
    
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
