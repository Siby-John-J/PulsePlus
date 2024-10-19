import { Module } from '@nestjs/common';
import { MongoModuleService } from '../services/mongo-service.module';
import { DoctorServiceUsecase  } from './doctor.service';
import { AppoinetmentServiceUsecase } from './appointment.service';
import { PublisherServiceModule } from '../services/publisher-service.module';
import { GroupServiceUsecase } from './group.service';
import { GroupMessageServiceUsecase } from './group-message.service';
import { GroupPollServiceUsecase } from './group-poll.service';
import { CombineMessageService } from './combine-message.service';

@Module({
  imports: [MongoModuleService, PublisherServiceModule],
  providers: [
    DoctorServiceUsecase, 
    GroupServiceUsecase, 
    GroupMessageServiceUsecase,
    GroupPollServiceUsecase,
    CombineMessageService
  ],
  exports: [
    DoctorServiceUsecase, 
    GroupServiceUsecase, 
    GroupMessageServiceUsecase,
    GroupPollServiceUsecase,
    CombineMessageService
  ],
})
export class DoctorUseCaseModule {}
