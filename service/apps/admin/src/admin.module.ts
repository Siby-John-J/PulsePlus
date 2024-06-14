import { Module } from '@nestjs/common';
import { AppoinetmentController } from './controllers';
import { MongooseModule } from '@nestjs/mongoose';
import { RmqModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';
import { AUTH_SERVICE } from '../constants/services';
import * as joi from 'joi';
import { MongoServiceModule } from './services/mongo-service.module';
import { AdminUseCaseModule } from './usecase/usecase.module';
import { AuthenticationController } from './controllers/authentications.controller';

@Module({
  imports: [
    RmqModule.register({ name: AUTH_SERVICE }),
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: joi.object({
        RABBIT_MQ_URI: joi.string().required(),
        RABBIT_MQ_AUTH_QUEUE: joi.string().required(),
        SERVICE_NAME: joi.string().required()
      }),
      envFilePath: './apps/admin/.env',
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    MongoServiceModule,
    AdminUseCaseModule
  ],
  controllers: [AppoinetmentController, AuthenticationController],
  // providers: [],
})
export class AdminModule {}
