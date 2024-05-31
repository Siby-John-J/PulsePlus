import { Module } from '@nestjs/common';
import { UsecaseModule } from './usecase/usecase.module';
import { JwtServiceModule } from './services/jwt-service.module';
import { AuthorizationController } from './controllers';
import * as joi from 'joi'
import { RmqModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';
import { AuthenticationController } from './controllers/authentication.controller';
import { PublisherServiceModule } from './services/publisher-service.module';

@Module({
  imports: [
    RmqModule.register(
      { name: 'PATIENT' }
    ),
    UsecaseModule,
    JwtServiceModule,
    PublisherServiceModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: joi.object({
        RABBIT_MQ_URI: joi.string().required(),
        RABBIT_MQ_AUTH_QUEUE: joi.string().required()
      }),
      envFilePath: './apps/auth/.env'
    }),
  ],
  controllers: [
    AuthorizationController,
    AuthenticationController
  ],
  providers: [],
})
export class AuthModule {}
