import { Module } from "@nestjs/common";
import { IAdminPublisher, IPatientPublisher } from "../../core";
import { AdminPublisherFramework, PatientPublisherFramework } from "./publisher.framework";
import { RmqModule } from "@app/common";

@Module({
    imports: [
        RmqModule.register(
            { name: 'ADMIN' }
        ),
        RmqModule.register(
          { name: 'PATIENT' }
        ),
    ],
    providers: [
        {
            useClass: PatientPublisherFramework,
            provide: IPatientPublisher,
        },
        {
            useClass: AdminPublisherFramework,
            provide: IAdminPublisher,
        },
    ],
    exports: [IPatientPublisher, IAdminPublisher]
})
export class PublisherModule {}