import { Module } from "@nestjs/common";
import { MongoFrameWorkModule } from "../framework";

@Module({
    imports: [MongoFrameWorkModule],
    exports: [MongoFrameWorkModule]
})
export class MongoServiceModule {}