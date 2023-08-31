import { IsArray, IsNumber, IsString } from 'class-validator';

export class OrderDetailDto {
  @IsString()
  shipping_details: string;

  @IsArray()
  items: ItemDto[];

  @IsNumber()
  total: number;

  @IsNumber()
  subtotal: number;
}

export class ItemDto {
  @IsNumber()
  quantity: number;

  @IsNumber()
  productId: number;

  @IsNumber()
  price: number;
}
