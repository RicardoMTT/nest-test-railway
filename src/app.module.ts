import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'containers-us-west-193.railway.app',
      port: 7938,
      username: 'root',
      password: 'Knie6Nf0vYbcEsgpbHuM',
      database: 'railway',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    ProductModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
