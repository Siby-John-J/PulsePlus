import { NestFactory } from '@nestjs/core';
import { AdminModule } from './admin.module';
// import { RmqService } from '@app/common';
import { MicroserviceOptions, RmqOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AdminModule);
  // const rmqservice = app.get<RmqService>(RmqService)
  // app.connectMicroservice<RmqOptions>(rmqservice.getOptions('ADMIN'))
  // await app.startAllMicroservices()

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.NATS,
    options: {
      urls: ['nats://localhost:4222'],
      queue: 'ADMIN',
    },
  })

  await app.startAllMicroservices()
  await app.listen(3002);
}
bootstrap();
