import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { IPatientRepository } from "../../core";
import { MongoRepository } from "./mongo-rep.service";
import { PatientSchema } from "./models/patient.schema";
import { NotificationSchema } from "./models/notification.schema";
import { FamilySchema } from "./models/family.schema";

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
    ])],
    providers: [{
        provide: IPatientRepository,
        useClass: MongoRepository
    }],
    exports: [IPatientRepository]
})
export class MongoFrameWorkModule {}
