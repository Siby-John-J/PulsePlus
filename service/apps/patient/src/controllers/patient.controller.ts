import { Body, Controller, Delete, Get, Patch, Post } from "@nestjs/common";
import { PatientUsecase } from "../usecase/patient-usecase";
import { ValidationPipe } from "./pipes/validation.pipe";

@Controller('patient')
export class PatientController {
    constructor(private patientUsecase: PatientUsecase) {}

    @Get('get')
    getPatient() {
        return this.patientUsecase.getPatient()
    }

    @Get('getall')
    getAllPatients() {
        return this.patientUsecase.getAllPatients()
    }

    @Post('create')
    createPatient(@Body(new ValidationPipe()) data: any) {
        console.log(data)
        
        return null
        // return this.patientUsecase.createPatient()
    }

    @Delete('delete')
    deletePatient() {
        return this.patientUsecase.deletePatient()
    }

    @Patch('update')
    editPatient(@Body() data: any) {
        console.log(data)
        return 'this.patientUsecase.updatePatient()'
    }
}
