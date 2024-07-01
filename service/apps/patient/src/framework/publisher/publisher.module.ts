import { Module } from "@nestjs/common";
import { IPublisher } from "../../core";
import { PublisherFramework } from "./publisher.framework";
import { RmqModule } from "@app/common";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
    imports: [
        // RmqModule.register(
        //   { name: 'ADMIN' }
        // ),
        // RmqModule.register(
        //     { name: 'AUTH' }
        // ),
        ClientsModule.register([
            {
              name: 'ADMIN',
              transport: Transport.NATS,
              options: {
                urls: ['nats://localhost:4222'],
                // queue: 'service_a_queue',
              },
            },
          ]),      
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