import { Module } from '@nestjs/common';
import { AppointmentController, ValidationController } from './controllers';
import { MongooseModule } from '@nestjs/mongoose';
// import { RmqModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';
import { AUTH_SERVICE } from '../constants/services';
import * as joi from 'joi';
import { MongoServiceModule } from './services/mongo-service.module';
import { AdminUseCaseModule } from './usecase/usecase.module';
import { AuthenticationController } from './controllers/authentications.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PublisherServiceModule } from './services/publisher-service.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: joi.object({
        // RABBIT_MQ_URI: joi.string().required(),
        // RABBIT_MQ_ADMIN_QUEUE: joi.string().required(),
        // RABBIT_MQ_AUTH_QUEUE: joi.string().required()
        // SERVICE_NAME: joi.string().required()
      }),
      envFilePath: './apps/admin/.env',
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    MongoServiceModule,
    PublisherServiceModule,
    AdminUseCaseModule
  ],
  controllers: [
    AppointmentController, 
    AuthenticationController,
    ValidationController
  ],
  // providers: [],
})
export class AdminModule {}
