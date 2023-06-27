import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../category.entity';
import { Product } from '../product.entity';
import { ConfigService } from '@nestjs/config';
const productsMock = [
  {
    id: '1',
    name: 'Adidas 2021',
    price: '100.00',
  },
  {
    id: '2',
    name: 'Adidas XR',
    price: '340.00',
  },
  {
    id: '3',
    name: 'Puma ZR2',
    price: '400.00',
  },
];
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
    console.log(dbUser);
    
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
}
