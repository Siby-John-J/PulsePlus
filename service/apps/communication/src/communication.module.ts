import { Module } from '@nestjs/common';
import { NotificationController } from "./controller"
import { NotificationService } from './usecase';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { MongoServiceModule } from './service/mongo-service.module';
import { GatewayFrameWorkModule } from './framework/socket/notification.module';
import { AppointmentNotificationController } from './controller/appointment.controller';
import { UseCaseModule } from './usecase/usecase.module';
import { DoctorNotificationController } from './controller/doctor-notification.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/communication/.env',
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    MongoServiceModule,
    UseCaseModule,
    GatewayFrameWorkModule
  ],
  controllers: [
    NotificationController, 
    AppointmentNotificationController,
    DoctorNotificationController
  ],
  providers: [],
})
export class CommunicationModule {}
