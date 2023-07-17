import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrmProductRepository } from '../commons/domain/repository/orm-product.repository';
import { ProductUseCaseService } from './application/product-use-case.service';
import { ProductRepository } from './domain/repository/product.repository';
import { ProductsController } from './infrastructure/products.controller';
import { ProductEntity } from 'src/commons/domain/entities/product.entity';
import {  CategoryEntity } from 'src/commons/domain/entities/category.entity';
import { CategoryController } from './infrastructure/category.controller';
import { CategoryUseCaseService } from './application/category-use-case.service';
import { CategoryRepository } from './domain/repository/category.repository';
import { OrmCategoryRepository } from 'src/commons/domain/repository/orm-category.repository';
import { TokenExpirationGuard } from 'src/guards/tokenExpirationGuard';
import { JwtService } from '@nestjs/jwt';
import { GetProductUseCaseService } from './application/get-product-use-case.service';
import { GetProductByCategoryUseCaseService } from './application/get-product-by-category.service';
 

@Module({
	imports: [TypeOrmModule.forFeature([ProductEntity,CategoryEntity])],
	controllers: [ProductsController,CategoryController],
	providers: [ProductUseCaseService, ProductRepository, OrmProductRepository,
		CategoryUseCaseService,CategoryRepository,OrmCategoryRepository,JwtService, TokenExpirationGuard,
	GetProductUseCaseService,GetProductByCategoryUseCaseService],
})
export class ProductsModule {}
