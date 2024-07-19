import { Module } from "@nestjs/common";
import { ICommunicationPublisher, IDoctorPublisher } from "../../core";
import { CommunicationPublisherFramework, DoctorPublisherFramework } from "./publisher.framework";
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
            {
                name: 'DOCTOR',
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
        {
            useClass: DoctorPublisherFramework,
            provide: IDoctorPublisher,
        },
    ],
    exports: [ICommunicationPublisher, IDoctorPublisher]
})
export class PublisherModule {}