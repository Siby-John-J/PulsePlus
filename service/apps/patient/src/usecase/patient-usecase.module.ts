import { Module } from '@nestjs/common';
import { PatientUsecase } from './patient-usecase';
import { MongoServiceModule } from '../services/mongo-service.module';
import { PatientAuthsUsecase } from './patient-auth.usecase';
import { PatientNotesUseCase } from './patient-notes.usecase';

@Module({
  imports: [MongoServiceModule],
  providers: [PatientUsecase, PatientAuthsUsecase, PatientNotesUseCase],
  exports: [PatientUsecase, PatientAuthsUsecase, PatientNotesUseCase],
})
export class PatientUseCaseModule {}
