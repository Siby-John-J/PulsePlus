import { NestFactory } from '@nestjs/core';
import { DoctorModule } from './doctor.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(DoctorModule)
  // app.enableCors({origin: '*'})
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
