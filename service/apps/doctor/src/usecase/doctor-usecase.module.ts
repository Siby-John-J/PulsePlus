import { Module } from '@nestjs/common';
import { MongoModuleService } from '../services/mongo-service.module';
import { DoctorService } from './doctor.service';

@Module({
  imports: [MongoModuleService],
  providers: [DoctorService],
  exports: [DoctorService],
})
export class DoctorUseCaseModule {}
