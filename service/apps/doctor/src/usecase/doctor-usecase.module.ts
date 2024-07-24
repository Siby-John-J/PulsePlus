import { Module } from '@nestjs/common';
import { MongoModuleService } from '../services/mongo-service.module';
import { DoctorServiceUsecase  } from './doctor.service';
import { AppoinetmentServiceUsecase } from './appointment.service';
import { PublisherServiceModule } from '../services/publisher-service.module';

@Module({
  imports: [MongoModuleService, PublisherServiceModule],
  providers: [DoctorServiceUsecase],
  exports: [DoctorServiceUsecase],
})
export class DoctorUseCaseModule {}
