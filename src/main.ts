import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  app.useGlobalPipes(new ValidationPipe());//Para usar las validaciones en toda la aplicación
  await app.listen(3000);
  // await app.listen(process.env.PORT || 3000);
}
bootstrap();
