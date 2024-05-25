import { Module } from '@nestjs/common';
import { PatientController } from './controllers/patient.controller';
import { PatientUseCaseModule } from './usecase/patient-usecase.module';
import { MongoServiceModule } from './services/mongo-service.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/patient-db'),
    PatientUseCaseModule,
    MongoServiceModule
  ],
  controllers: [PatientController],
})
export class PatientModule {}
