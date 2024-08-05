import { Module } from '@nestjs/common';
import { PatientUsecase } from './patient-usecase';
import { MongoServiceModule } from '../services/mongo-service.module';
import { PatientAuthsUsecase } from './patient-auth.usecase';
import { PatientNotesUseCase } from './patient-notes.usecase';
import { PublisherServiceModule } from '../services/publisher-service.module';
import { PatientPaymentUseCase } from './patient-payment.usecase';
import { StripeModule } from '../framework/stripe/stripe.module';

@Module({
  imports: [MongoServiceModule, PublisherServiceModule, StripeModule],
  providers: [PatientUsecase, PatientAuthsUsecase, PatientNotesUseCase, PatientPaymentUseCase],
  exports: [PatientUsecase, PatientAuthsUsecase, PatientNotesUseCase, PatientPaymentUseCase],
})
export class PatientUseCaseModule {}
