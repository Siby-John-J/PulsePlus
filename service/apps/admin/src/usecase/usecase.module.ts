import { Module } from '@nestjs/common';
import { AppoinetmentUsecase } from './appoientment.usecase';
import { MongoServiceModule } from '../services/mongo-service.module';

@Module({
  imports: [MongoServiceModule],
  providers: [AppoinetmentUsecase],
  exports: [AppoinetmentUsecase],
})
export class AdminUseCaseModule {}
