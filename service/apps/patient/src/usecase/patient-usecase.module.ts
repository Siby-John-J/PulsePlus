import { Module } from '@nestjs/common';
import { PatientUsecase } from './patient-usecase';
import { MongoServiceModule } from '../services/mongo-service.module';
import { PatientAuthsUsecase } from './patient-auth.usecase';
import { PatientNotesUseCase } from './patient-notes.usecase';
import { PublisherServiceModule } from '../services/publisher-service.module';

@Module({
  imports: [MongoServiceModule, PublisherServiceModule],
  providers: [PatientUsecase, PatientAuthsUsecase, PatientNotesUseCase],
  exports: [PatientUsecase, PatientAuthsUsecase, PatientNotesUseCase],
})
export class PatientUseCaseModule {}
