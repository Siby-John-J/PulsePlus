import { Module } from '@nestjs/common';
import { AuthorizationUsecase } from './autherization-usecase';
import { JwtServiceModule } from '../services/jwt-service.module';

@Module({
  imports: [JwtServiceModule],
  providers: [AuthorizationUsecase],
  exports: [AuthorizationUsecase],
})
export class UsecaseModule {}
