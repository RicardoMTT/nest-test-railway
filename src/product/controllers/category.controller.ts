import { Controller, Get, UseGuards } from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import { AuthGuard } from 'src/guards/authGuard';

@Controller('category')
@UseGuards(AuthGuard) //Guard con alcance de controlador
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get('/')
  categories() {
    return this.categoryService.categories();
  }
}
