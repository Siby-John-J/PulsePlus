import { MongoFrameWorkModule } from "../framework/mongo/mongo.module";
import { Module } from "@nestjs/common";

@Module({
    imports: [MongoFrameWorkModule],
    exports: [MongoFrameWorkModule]
})
export class MongoServiceModule {}