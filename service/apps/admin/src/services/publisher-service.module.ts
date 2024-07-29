import { Module } from '@nestjs/common';
import { PublisherModule } from '../framework/publisher/publisher.module';

@Module({
  imports: [PublisherModule],
  exports: [PublisherModule],
})
export class PublisherServiceModule {}
