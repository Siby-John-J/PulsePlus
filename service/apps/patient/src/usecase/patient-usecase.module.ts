import { Module } from "@nestjs/common";
import { PatientUsecase } from "./patient-usecase";
import { MongoServiceModule } from "../services/mongo-service.module";
import { PatientActionsUsecase } from "./patientActions-usecase";

@Module({
    imports: [MongoServiceModule],
    providers: [PatientUsecase, PatientActionsUsecase],
    exports: [PatientUsecase, PatientActionsUsecase]
})
export class PatientUseCaseModule {}
