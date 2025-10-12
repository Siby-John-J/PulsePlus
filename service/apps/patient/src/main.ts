import { NestFactory } from '@nestjs/core';
import { PatientModule } from './main.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(PatientModule)
  
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
