import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
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
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}
  async products() {
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

  async getProductByCategoryId(categoryBody) {
    const { idCategory } = categoryBody;
    const categoryFound = await this.categoryRepository.findOne({
      where: {
        id: idCategory,
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
}
