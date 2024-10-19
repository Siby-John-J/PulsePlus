import { Module } from '@nestjs/common';
import { Appoinetment, DoctorAuthController, GroupController, GroupMessageController } from './controller';
import { MongoModuleService } from './services/mongo-service.module';
import { DoctorUseCaseModule } from './usecase/doctor-usecase.module';
import { ConfigModule } from '@nestjs/config';
import * as joi from 'joi'; 
import { MongooseModule } from '@nestjs/mongoose';
import { PublisherServiceModule } from './services/publisher-service.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/doctor/.env',
      validationSchema: joi.object({
        
      }),
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    MongoModuleService,
    DoctorUseCaseModule
  ],
  controllers: [
    DoctorAuthController,
    GroupController,
    GroupMessageController
    // Appoinetment
    
  ]
})
export class DoctorModule {}
