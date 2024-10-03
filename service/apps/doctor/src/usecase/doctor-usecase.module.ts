import { Module } from '@nestjs/common';
import { MongoModuleService } from '../services/mongo-service.module';
import { DoctorServiceUsecase  } from './doctor.service';
import { AppoinetmentServiceUsecase } from './appointment.service';
import { PublisherServiceModule } from '../services/publisher-service.module';
import { GroupServiceUsecase } from './group.service';
import { GroupMessageServiceUsecase } from './group-message.service';

@Module({
  imports: [MongoModuleService, PublisherServiceModule],
  providers: [DoctorServiceUsecase, GroupServiceUsecase],
  exports: [DoctorServiceUsecase, GroupServiceUsecase],
})
export class DoctorUseCaseModule {}
