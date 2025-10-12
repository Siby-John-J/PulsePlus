import { Module } from '@nestjs/common';
import { NotificationController, TextChatController } from './controller';
import { NotificationService } from './usecase';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongoServiceModule } from './service/mongo-service.module';
import { GatewayFrameWorkModule } from './framework/socket/notification/notification.module';
import { AppointmentNotificationController } from './controller/appointment.controller';
import { UseCaseModule } from './usecase/usecase.module';
import { DoctorNotificationController } from './controller/doctor-notification.controller';
import { SocketServiceModule } from './service/socket-service.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/communication/.env',
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
    }),
    MongoServiceModule,
    UseCaseModule,
    GatewayFrameWorkModule,
    SocketServiceModule
  ],
  controllers: [
    NotificationController,
    AppointmentNotificationController,
    DoctorNotificationController,
    TextChatController,
  ],
  providers: [],
})
export class CommunicationModule {}
