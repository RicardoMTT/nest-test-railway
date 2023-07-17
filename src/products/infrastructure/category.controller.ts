import { Controller, Get, Inject, Param, UseGuards } from '@nestjs/common';
import { IUseCaseCategoryService } from '../application/category-use-case.interface';
import { CategoryUseCaseService } from '../application/category-use-case.service';
import { TokenExpirationGuard } from 'src/guards/tokenExpirationGuard';

@Controller('category')
export class CategoryController {
  constructor(
    @Inject(CategoryUseCaseService)
    private readonly _categoryService: IUseCaseCategoryService,
  ) {}

  @Get('/')
  // @UseGuards(TokenExpirationGuard)
  async categories() {
    return this._categoryService.categories();
  }
}
