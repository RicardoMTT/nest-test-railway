import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PaymentModule } from './payment/payment.module';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    ConfigModule.forRoot(),//cargara y analizar un archivo .env desde la ubicacion por default (root)
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      useFactory:(configService:ConfigService)=>({
        type: 'mysql',
        host: configService.get('HOST'),
        port: configService.get('PORT'),
        username: configService.get('DATABASE_USERNAME'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject:[ConfigService]
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
