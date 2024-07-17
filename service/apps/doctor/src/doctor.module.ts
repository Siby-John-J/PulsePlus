import { Module } from '@nestjs/common';
import { DoctorController } from './controller';
import { DoctorService } from './usecase';
import { MongoModuleService } from './services/mongo-service.module';
import { DoctorUseCaseModule } from './usecase/doctor-usecase.module';
import { ConfigModule } from '@nestjs/config';
import * as joi from 'joi'; 
import { MongooseModule } from '@nestjs/mongoose';

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
  controllers: [DoctorController]
})
export class DoctorModule {}
