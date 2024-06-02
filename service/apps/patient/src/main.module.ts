import { Module } from '@nestjs/common';
import { PatientAuthController } from './controllers/patient-auth.controller';
import { PatientUseCaseModule } from './usecase/patient-usecase.module';
import { MongoServiceModule } from './services/mongo-service.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RmqModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';
import * as joi from 'joi';
import { AUTH_SERVICE } from '../constants/services';
import { PatientActionsController } from './controllers/patient-actions.controller';

@Module({
  imports: [
    RmqModule.register({ name: AUTH_SERVICE }),
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: joi.object({
        RABBIT_MQ_URI: joi.string().required(),
        RABBIT_MQ_AUTH_QUEUE: joi.string().required(),
      }),
      envFilePath: './apps/patient/.env',
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    PatientUseCaseModule,
    MongoServiceModule,
  ],
  controllers: [PatientAuthController, PatientActionsController],
})
export class PatientModule {}
