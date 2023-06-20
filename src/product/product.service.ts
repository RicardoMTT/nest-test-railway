import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
  ) {}
  async products() {
    try {
      const products = await this.productRepository.find();
      return {
        products,
      };
    } catch (error) {
      console.log('error', error);
    }
  }
}
