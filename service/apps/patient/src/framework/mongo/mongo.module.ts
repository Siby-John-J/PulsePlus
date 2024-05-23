import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { IPatientRepository } from "../../core";
import { MongoRepository } from "./mongo-rep.service";
import { PatientSchema } from "./models/patient.schema";

@Module({
    imports: [MongooseModule.forFeature([{
        name: 'Patient',
        schema: PatientSchema
    }])],
    providers: [{
        provide: IPatientRepository,
        useClass: MongoRepository
    }],
    exports: [IPatientRepository]
})
export class MongoFrameWorkModule {}
