import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AuthorizationUsecase } from './autherization-usecase';
import { JwtServiceModule } from '../services/jwt-service.module';
import { AuthenticationUsecase } from './authentication-usecase';
import { PublisherServiceModule } from '../services/publisher-service.module';
import { ValidateRequestMiddleware } from '../controllers';
import { PublisherUseCase } from './publisher-usecase';

@Module({
  imports: [JwtServiceModule, PublisherServiceModule],
  providers: [AuthorizationUsecase, AuthenticationUsecase, PublisherUseCase],
  exports: [AuthorizationUsecase, AuthenticationUsecase, PublisherUseCase],
})
export class UsecaseModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ValidateRequestMiddleware)
      .forRoutes({ path: '/AuthZ/create_token', method: RequestMethod.POST });
  }
}
