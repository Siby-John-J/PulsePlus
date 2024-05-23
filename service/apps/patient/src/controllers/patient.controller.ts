import { Controller, Get, Post } from "@nestjs/common";
import { PatientUsecase } from "../usecase/patient-usecase";

@Controller('patient')
export class PatientController {
    constructor(private patientUsecase: PatientUsecase) {}

    @Get('get')
    getPatient() {
        return this.patientUsecase.getPatient()
    }

    @Post('create')
    createPatient() {
        return this.patientUsecase.createPatient()
    }
}