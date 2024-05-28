import { Module } from '@nestjs/common';
import { UsecaseModule } from './usecase/usecase.module';
import { JwtServiceModule } from './services/jwt-service.module';
import { AuthorizationController } from './controllers';

@Module({
  imports: [UsecaseModule, JwtServiceModule],
  controllers: [AuthorizationController],
  providers: [],
})
export class AuthModule {}
