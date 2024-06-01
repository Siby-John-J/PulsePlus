import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { IPatientActions, IPatientRepository } from "../../core";
import { MongoRepository } from "./mongo-rep.service";
import { PatientSchema } from "./models/patient.schema";
import { NotificationSchema } from "./models/notification.schema";
import { FamilySchema } from "./models/family.schema";
import { MongoActionRepository } from "./mongo-rep-actions.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: 'Patient',
                schema: PatientSchema
            },
            {
                name: 'Notification',
                schema: NotificationSchema
            },
            {
                name: 'Family',
                schema: FamilySchema
            }
        ])
    ],
    providers: [
        {
            provide: IPatientRepository,
            useClass: MongoRepository
        }, 
        {
            provide: IPatientActions,
            useClass: MongoActionRepository
        }
    ],
    exports: [IPatientRepository, IPatientActions]
})
export class MongoFrameWorkModule {}
