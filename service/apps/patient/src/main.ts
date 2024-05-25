import { NestFactory } from '@nestjs/core';
import { PatientModule } from './main.module';

async function bootstrap() {
  const app = await NestFactory.create(PatientModule);
  await app.listen(3000);
}
bootstrap();
