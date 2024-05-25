import { Module } from '@nestjs/common';
import { AuthenticationController } from './controllers/authentication.controller';
import { UsecaseModule } from './usecase/usecase.module';
import { JwtServiceModule } from './services/jwt-service.module';

@Module({
  imports: [
    UsecaseModule,
    JwtServiceModule
  ],
  controllers: [AuthenticationController],
  providers: [],
})
export class AuthModule {}
