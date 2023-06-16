import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3308,
      username: 'root',
      password: 'root',
      database: 'testdb',
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
