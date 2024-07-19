import { NestFactory } from '@nestjs/core';
import { DoctorModule } from './doctor.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(DoctorModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.NATS,
    options: {
      urls: ['nats://localhost:4222'],
      queue: 'DOCTOR',
    },
  })
  
  await app.startAllMicroservices()
  await app.listen(3004);
}
bootstrap();
