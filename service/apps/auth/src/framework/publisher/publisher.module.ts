import { Inject, Ip, Module } from "@nestjs/common";
import { IPublisher } from "../../core";
import { PublisherFramework } from "./publisher.framework";
import { ClientProxy } from "@nestjs/microservices";
import { RmqModule } from "@app/common";
import { AUTH_SERVICE } from "apps/patient/constants/services";

@Module({
    imports: [
        // ClientsModule.register({clients: [{name: 'client'}], isGlobal: true})
    ],
    providers: [
        {
            useClass: PublisherFramework,
            provide: IPublisher,
        },
        {
            provide: ClientProxy,
            useValue: 'PATIENT'
        },
        {
            useClass: ClientProxy,
            provide: 'PATIENT',
        }
    ],
    exports: [IPublisher]
})
export class PublisherModule {}