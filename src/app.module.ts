import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PaymentModule } from './payment/payment.module';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderModule } from './order/order.module';
@Module({
  imports: [
    ConfigModule.forRoot(), //cargara y analizar un archivo .env desde la ubicacion por default (root)
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: 'localhost',
        port: 3308,
        username: 'root',
        password: 'root',
        database: 'testdb',
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    ProductsModule, //Con arquitectura hexagonal
    PaymentModule,
    OrderModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
