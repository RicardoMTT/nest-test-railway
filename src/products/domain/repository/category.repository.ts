import { Inject, Injectable } from '@nestjs/common';
import { ICrudCategoryRepository } from './category.interface';
import { IOrmCategoryRepository } from 'src/commons/domain/repository/orm-category.repository.interface';
import { OrmCategoryRepository } from 'src/commons/domain/repository/orm-category.repository';
import { ICategoryRepositoryModel } from '../models/category-repository.model';

@Injectable()
export class CategoryRepository implements ICrudCategoryRepository {
  constructor(
    @Inject(OrmCategoryRepository)
    private readonly ormCategoryRepository: IOrmCategoryRepository,
  ) {}

  async categories(): Promise<ICategoryRepositoryModel[]> {
    const allCategories = await this.ormCategoryRepository.categories();
    return allCategories;
  }
}
