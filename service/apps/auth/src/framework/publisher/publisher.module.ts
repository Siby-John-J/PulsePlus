import { Module } from "@nestjs/common";
import { IAdminPublisher, IDoctorPublisher, IPatientPublisher } from "../../core";
import { AdminPublisherFramework, DoctorPublisherFramework, PatientPublisherFramework } from "./publisher.framework";
import { RmqModule } from "@app/common";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
    imports: [
    //   RmqModule.register(
    //     { name: 'PATIENT' }
    //   ),
    //   RmqModule.register(
    //       { name: 'ADMIN' }
    //   ),
        ClientsModule.register([
            {
              name: 'PATIENT',
              transport: Transport.NATS,
              options: {
                urls: ['nats://localhost:4222'],
              },
            },
            {
                name: 'ADMIN',
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
            useClass: PatientPublisherFramework,
            provide: IPatientPublisher,
        },
        {
            useClass: AdminPublisherFramework,
            provide: IAdminPublisher,
        },
        {
          useClass: DoctorPublisherFramework,
          provide: IDoctorPublisher,
      },
    ],
    exports: [IPatientPublisher, IAdminPublisher, IDoctorPublisher]
})
export class PublisherModule {}