import { Inject, Injectable } from '@nestjs/common';
import { IUseCaseCategoryService } from './category-use-case.interface';
import { ICrudCategoryRepository } from '../domain/repository/category.interface';
import { CategoryRepository } from '../domain/repository/category.repository';

@Injectable()
export class CategoryUseCaseService implements IUseCaseCategoryService {
    
  constructor(
    @Inject(CategoryRepository)
    private readonly categoryRepository: ICrudCategoryRepository,
  ) {}

  async categories(): Promise<any> {
    const categories = await this.categoryRepository.categories();
    return categories;
  }

}
