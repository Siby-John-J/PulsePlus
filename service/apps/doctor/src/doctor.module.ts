import { Module } from '@nestjs/common';
import { Appoinetment, DoctorAuthController, FilesController, GroupController, GroupMessageController } from './controller';
import { MongoModuleService } from './services/mongo-service.module';
import { DoctorUseCaseModule } from './usecase/doctor-usecase.module';
import { ConfigModule } from '@nestjs/config';
import * as joi from 'joi'; 
import { MongooseModule } from '@nestjs/mongoose';
import { PublisherServiceModule } from './services/publisher-service.module';
import { FileModuleService } from './services/file-service.module';
import { ServeStaticModule } from "@nestjs/serve-static"
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join('E:/Hospital-Management/code/service/dist/', '..', 'public')
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/doctor/.env',
      validationSchema: joi.object({
        
      }),
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    MongoModuleService,
    DoctorUseCaseModule,
    FileModuleService
  ],
  controllers: [
    DoctorAuthController,
    GroupController,
    GroupMessageController,
    FilesController
    // Appoinetment
    
  ]
})
export class DoctorModule {}
