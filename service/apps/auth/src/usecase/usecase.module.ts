import { Module } from '@nestjs/common';
import { AuthorizationUsecase } from './autherization-usecase';
import { JwtServiceModule } from '../services/jwt-service.module';
import { AuthenticationUsecase } from './authentication-usecase';
import { PublisherServiceModule } from '../services/publisher-service.module';

@Module({
  imports: [JwtServiceModule, PublisherServiceModule],
  providers: [AuthorizationUsecase, AuthenticationUsecase],
  exports: [AuthorizationUsecase, AuthenticationUsecase],
})
export class UsecaseModule {}
