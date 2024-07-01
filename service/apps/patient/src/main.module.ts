import { Module } from '@nestjs/common';
import { PatientUseCaseModule } from './usecase/patient-usecase.module';
import { MongoServiceModule } from './services/mongo-service.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RmqModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';
import * as joi from 'joi'; 
import { AUTH_SERVICE } from '../constants/services';
import { PatientAuthController } from './controllers';
import { PatientActionsController } from './controllers';
import { PatientNotesController } from './controllers';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    // RmqModule.register({ name: AUTH_SERVICE }),
    // RmqModule.register({ name: 'ADMIN' }),
    // RmqModule.register({ name: 'PATIENT' }),
    // ClientsModule.register([
    //   {
    //     name: 'ADMIN',
    //     transport: Transport.RMQ,
    //     options: {
    //       urls: ['amqp://localhost:5672'],
    //       queue: 'service_a_queue',
    //     },
    //   },
    // ]), 
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: joi.object({
        RABBIT_MQ_URI: joi.string().required(),
        RABBIT_MQ_PATIENT_QUEUE: joi.string().required(),
        RABBIT_MQ_AUTH_QUEUE: joi.string().required(),
        RABBIT_MQ_ADMIN_QUEUE: joi.string().required()
        // SERVICE_NAME: joi.string().required()
        
      }),
      envFilePath: './apps/patient/.env',
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    PatientUseCaseModule,
    MongoServiceModule,
  ],
  controllers: [
    PatientAuthController, 
    PatientActionsController,
    PatientNotesController
  ]
})
export class PatientModule {}
