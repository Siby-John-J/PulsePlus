import { Module } from '@nestjs/common';
import { PatientUsecase } from './patient-usecase';
import { MongoServiceModule } from '../services/mongo-service.module';
import { PatientAuthsUsecase } from './patient-auth.usecase';

@Module({
  imports: [MongoServiceModule],
  providers: [PatientUsecase, PatientAuthsUsecase],
  exports: [PatientUsecase, PatientAuthsUsecase],
})
export class PatientUseCaseModule {}
