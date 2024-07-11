import { Module } from "@nestjs/common";
import { ICommunicationPublisher } from "../../core";
import { CommunicationPublisherFramework } from "./publisher.framework";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
    imports: [
        ClientsModule.register([
            {
              name: 'COMMUNICATION',
              transport: Transport.NATS,
              options: {
                urls: ['nats://localhost:4222'],
              },
            },
        ]),      
    ],
    providers: [
        {
            useClass: CommunicationPublisherFramework,
            provide: ICommunicationPublisher,
        },
    ],
    exports: [ICommunicationPublisher]
})
export class PublisherModule {}