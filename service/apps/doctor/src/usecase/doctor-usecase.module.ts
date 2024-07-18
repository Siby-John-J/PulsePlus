import { Module } from '@nestjs/common';
import { MongoModuleService } from '../services/mongo-service.module';
import { DoctorService } from './doctor.service';
import { PublisherServiceModule } from '../services/publisher-service.module';

@Module({
  imports: [MongoModuleService, PublisherServiceModule],
  providers: [DoctorService],
  exports: [DoctorService],
})
export class DoctorUseCaseModule {}
