import { Module } from '@nestjs/common';
import { MongoModuleService } from '../services/mongo-service.module';
import { DoctorServiceUsecase  } from './doctor.service';
import { AppoinetmentServiceUsecase } from './appointment.service';
import { PublisherServiceModule } from '../services/publisher-service.module';
import { GroupServiceUsecase } from './group.service';
import { GroupMessageServiceUsecase } from './group-message.service';
import { GroupPollServiceUsecase } from './group-poll.service';
import { CombineMessageService } from './combine-message.service';
import { FileModuleService } from '../services/file-service.module';
import { FileServiceUsecase } from './file.service';

@Module({
  imports: [MongoModuleService, PublisherServiceModule, FileModuleService],
  providers: [
    DoctorServiceUsecase, 
    GroupServiceUsecase, 
    GroupMessageServiceUsecase,
    GroupPollServiceUsecase,
    CombineMessageService,
    FileServiceUsecase
  ],
  exports: [
    DoctorServiceUsecase, 
    GroupServiceUsecase, 
    GroupMessageServiceUsecase,
    GroupPollServiceUsecase,
    CombineMessageService,
    FileServiceUsecase
  ],
})
export class DoctorUseCaseModule {}
