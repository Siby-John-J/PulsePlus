import { Module } from '@nestjs/common';
import { AppoinetmentUsecase } from './appoientment.usecase';
import { MongoServiceModule } from '../services/mongo-service.module';
import { ValidationUsecase } from './validation.usecase';
import { AppointmenPaymentUsecase } from './appo-payment.usecase';

@Module({
  imports: [MongoServiceModule],
  providers: [AppoinetmentUsecase, ValidationUsecase, AppointmenPaymentUsecase],
  exports: [AppoinetmentUsecase, ValidationUsecase, AppointmenPaymentUsecase],
})
export class AdminUseCaseModule {}
