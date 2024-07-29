import { Module } from '@nestjs/common';
import { MongoFrameWorkModule } from '../framework/mongo/mongo.module';

@Module({
  imports: [MongoFrameWorkModule],
  exports: [MongoFrameWorkModule],
})
export class MongoServiceModule {}
