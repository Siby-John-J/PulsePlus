import { NestFactory } from '@nestjs/core';
import { CommunicationModule } from './communication.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(CommunicationModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.NATS,
    options: {
      urls: [process.env.NATS_URI],
      queue: 'COMMUNICATION',
    },
  })
  app.enableCors({
    credentials: true
  })
  app.startAllMicroservices()
  await app.listen(3003);
}
bootstrap();
