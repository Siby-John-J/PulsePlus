import { Module } from '@nestjs/common';
import { UsecaseModule } from './usecase/usecase.module';
import { JwtServiceModule } from './services/jwt-service.module';
import { AuthorizationController } from './controllers';
import * as joi from 'joi'
import { RmqModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';
import { AuthenticationController } from './controllers/authentication.controller';
import { PublisherServiceModule } from './services/publisher-service.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    // RmqModule.register(
    //   { name: 'PATIENT' }
    // ),
    // RmqModule.register(
      // { name: 'ADMIN' }
    // ),
    ClientsModule.register([
      {
        name: 'ADMIN',
        transport: Transport.NATS,
        options: {
          urls: ['nats://localhost:4222'],
        },
      },
      {
        name: 'PATIENT',
        transport: Transport.NATS,
        options: {
          urls: ['nats://localhost:4222'],
        },
      },
  ]),
    UsecaseModule,
    JwtServiceModule,
    PublisherServiceModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: joi.object({
        // RABBIT_MQ_URI: joi.string().required(),
        // RABBIT_MQ_AUTH_QUEUE: joi.string().required(),
        RABBIT_MQ_ADMIN_QUEUE: joi.string().required(),
        RABBIT_MQ_PATIENT_QUEUE: joi.string().required()
      }),
      envFilePath: './apps/auth/.env'
    }),
  ],
  controllers: [
    AuthorizationController,
    AuthenticationController,
  ],
  providers: [],
})
export class AuthModule {}
