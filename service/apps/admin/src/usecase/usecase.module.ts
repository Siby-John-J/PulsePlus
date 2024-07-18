import { Module } from '@nestjs/common';
import { AppoinetmentUsecase } from './appoientment.usecase';
import { MongoServiceModule } from '../services/mongo-service.module';
import { ValidationUsecase } from './validation.usecase';

@Module({
  imports: [MongoServiceModule],
  providers: [AppoinetmentUsecase, ValidationUsecase],
  exports: [AppoinetmentUsecase, ValidationUsecase],
})
export class AdminUseCaseModule {}
