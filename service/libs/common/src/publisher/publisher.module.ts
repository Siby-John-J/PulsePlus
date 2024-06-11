import { Module } from "@nestjs/common";
import { IPublisher } from "./IPublisher";
import { PublisherFramework } from "./publisher.framework";
import { RmqModule } from "@app/common";

@Module({
    imports: [
        RmqModule.register(
          { name: 'PATIENT' }
        ),
    ],
    providers: [
        {
            useClass: PublisherFramework,
            provide: IPublisher,
        },
    ],
    exports: [IPublisher]
})
export class PublisherModule {}