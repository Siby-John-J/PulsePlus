import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { RmqService } from '@app/common';
import { RmqOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  const rmqservice = app.get<RmqService>(RmqService)
  app.connectMicroservice<RmqOptions>(rmqservice.getOptions('AUTH'))
  await app.startAllMicroservices()
  await app.listen(3000);
}
bootstrap();

