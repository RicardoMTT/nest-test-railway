import { Injectable } from '@nestjs/common'; 
const productsMock = [
  {
    id:"1",
    name:"Adidas 2021",
    price : "100.00"
  },
  {
    id:"2",
    name:"Adidas XR",
    price : "340.00"
  },
  {
    id:"3",
    name:"Puma ZR2",
    price : "400.00"
  },
]
@Injectable()
export class ProductService {
  constructor(
    // @InjectRepository(Product)
    // private productRepository: Repository<Product>,
  ) {}
  async products() {
    try {
      // const products = await this.productRepository.find();
      return {
        products:productsMock,
      };
    } catch (error) {
      console.log('error', error);
    }
  }

 
}
