import { NestFactory } from '@nestjs/core';
import { PatientModule } from './main.module';
import { RmqService } from '@app/common';
import { MicroserviceOptions, RmqOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(PatientModule)
  // const rmqservice = app.get<RmqService>(RmqService)
  // app.connectMicroservice<RmqOptions>(rmqservice.getOptions('PATIENT'))
  
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.NATS,
    options: {
      urls: ['nats://localhost:4222'],
      queue: 'PATIENT',
    },
  })
  
  await app.startAllMicroservices()
  app.listen(3001)
}
bootstrap();
