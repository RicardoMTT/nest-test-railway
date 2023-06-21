import { Module } from '@nestjs/common';
import { Product } from './product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { CategoryController } from './controllers/category.controller';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';
import { ProductController } from './controllers/product.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Product,Category]),],
  controllers: [ProductController,CategoryController],
  providers: [ProductService,CategoryService],
})
export class ProductModule {}
