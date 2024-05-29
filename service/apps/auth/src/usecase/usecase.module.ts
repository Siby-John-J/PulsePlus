import { Module } from '@nestjs/common';
import { AuthorizationUsecase } from './autherization-usecase';
import { JwtServiceModule } from '../services/jwt-service.module';
import { AuthenticationUsecase } from './authentication-usecase';

@Module({
  imports: [JwtServiceModule],
  providers: [AuthorizationUsecase, AuthenticationUsecase],
  exports: [AuthorizationUsecase, AuthenticationUsecase],
})
export class UsecaseModule {}
