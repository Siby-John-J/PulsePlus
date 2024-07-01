import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { RmqService } from '@app/common';
import { MicroserviceOptions, RmqOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule)
  // const rmqservice = app.get<RmqService>(RmqService)
  // app.connectMicroservice<RmqOptions>(rmqservice.getOptions('AUTH'))
  // app.connectMicroservice<RmqOptions>(rmqservice.getOptions('PATIENT'))
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.NATS,
    options: {
      urls: ['nats://localhost:4222'],
      // queue: 'service_b_queue',
    },
  })
  // await app.startAllMicroservices()
  await app.listen(3000);
}
bootstrap();
