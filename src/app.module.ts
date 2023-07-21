import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PaymentModule } from './payment/payment.module';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    ConfigModule.forRoot(),//cargara y analizar un archivo .env desde la ubicacion por default (root)
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'bngglu2oscem3wymigwx-mysql.services.clever-cloud.com',
      port: 3306,
      username: 'u6eszvnpy2eyosll',
      password: 'W9ukIAyh4UGxlxiA7wRa',
      database: 'bngglu2oscem3wymigwx',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    //  ProductModule,
    ProductsModule,//Con arquitectura hexagonal
    PaymentModule,
  ],
  controllers: [],
  providers: [    
    ],
})
export class AppModule {}
