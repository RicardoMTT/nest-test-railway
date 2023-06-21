import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}
  async categories() {
    try {
      const categories = await this.categoryRepository.find( );
      return {
        categories,
      };
    } catch (error) {
      console.log('error', error);
    }
  }

}
