import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    
  ],
  controllers: [PaymentController],
  providers: [ConfigService],
})
export class PaymentModule {}
