import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PaymentModule } from './payment/payment.module';
@Module({
  imports: [
    ConfigModule.forRoot(),//cargara y analizar un archivo .env desde la ubicacion por default (root)
    TypeOrmModule.forRootAsync({//usamos forRootAsync para inyectar el configService y obtener valores del environment
     imports:[ConfigModule],
     useFactory: (configService:ConfigService) =>({
      type: 'mysql',
      host: 'containers-us-west-193.railway.app',
      port: 7938,
      username: 'root',
      password: 'Knie6Nf0vYbcEsgpbHuM',
      database: 'railway',
      autoLoadEntities: true,
      synchronize: true,
     }),
     inject: [ConfigService],
    }),
    AuthModule,
    ProductModule,
    PaymentModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
