import { Module } from '@nestjs/common';
import { PatientUseCaseModule } from './usecase/patient-usecase.module';
import { MongoServiceModule } from './services/mongo-service.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RmqModule } from '@app/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as joi from 'joi';
import { AUTH_SERVICE } from '../constants/services';
import { PatientAuthController, PatientPaymentController } from './controllers';
import { PatientActionsController } from './controllers';
import { PatientNotesController } from './controllers';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PublisherServiceModule } from './services/publisher-service.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/patient/.env',
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
    }),
    PatientUseCaseModule,
    MongoServiceModule,
    PublisherServiceModule
  ],
  controllers: [
    PatientPaymentController,
    PatientAuthController,
    PatientActionsController,
    PatientNotesController
  ]
})
export class PatientModule { }
