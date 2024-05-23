import { Module } from "@nestjs/common";
import { PatientUsecase } from "./patient-usecase";
import { MongoServiceModule } from "../services/mongo-service.module";

@Module({
    imports: [MongoServiceModule],
    providers: [PatientUsecase],
    exports: [PatientUsecase]
})
export class PatientUseCaseModule {}
