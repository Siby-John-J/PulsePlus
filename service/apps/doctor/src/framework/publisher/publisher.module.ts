import { Module } from "@nestjs/common";
import { IAdminPublisher } from "../../core";
import { PublisherFramework } from "./publisher.framework";
import { RmqModule } from "@app/common";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
    imports: [
        ClientsModule.register([
            {
              name: 'ADMIN',
              transport: Transport.NATS,
              options: {
                urls: ['nats://localhost:4222'],
              },
            },
          ]),
    ],
    providers: [
        {
            useClass: PublisherFramework,
            provide: IAdminPublisher,
        },
    ],
    exports: [IAdminPublisher]
})
export class PublisherModule {}