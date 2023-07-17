import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { IOrmCategoryRepository } from './orm-category.repository.interface';
import { CategoryEntity } from '../entities/category.entity';
import { IGetCategoryRepositoryDto } from '../dto/category-repository';
import { of } from 'rxjs';

@Injectable()
export class OrmCategoryRepository
  extends Repository<CategoryEntity>
  implements IOrmCategoryRepository
{
  constructor(dataSource: DataSource) {
    super(CategoryEntity, dataSource.createEntityManager());
  }
   
  async categories(): Promise<IGetCategoryRepositoryDto[]> {
    return await this.find();
  }

}
