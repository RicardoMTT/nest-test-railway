import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Category } from '../category.entity';
import { Product } from '../product.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ProductService {
  constructor(
    private configService: ConfigService,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}
  async products() {
    const dbUser = this.configService.get<string>('DATABASE_USERNAME');
    
    try {
      const products = await this.productRepository.find({
        relations: ['category'],
      });
      return {
        products,
      };
    } catch (error) {
      console.log('error', error);
    }
  }

  async getProductByCategoryId(id) {
    const categoryFound = await this.categoryRepository.findOne({
      where: {
        id,
      },
      relations: ['product'],
    });

    if (!categoryFound) {
      return {
        ok: false,
        product: [],
      };
    }
    return {
      ok: true,
      product: categoryFound.product,
    };
  }

  async getProduct(id) {
    const productFound = await this.productRepository.findOne({
      where: {
        id
      },
      relations: ['category'],
    });

    if (!productFound) {
      return {
        ok: false,
        data:null
      };
    }
    return {
      ok: true,
      data:productFound,
    };
  }


  async getProductByTerm(term) {
    const productFound = await this.productRepository.findOne({
      where: {
         name:Like(`%${term}%`)
      },
      relations: ['category'],
    });

    if (!productFound) {
      return {
        ok: false,
        data:null
      };
    }
    return {
      ok: true,
      data:productFound,
    };
  }
}
