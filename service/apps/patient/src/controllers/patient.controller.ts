import { Body, Controller, Delete, Get, Patch, Post } from "@nestjs/common";
import { PatientUsecase } from "../usecase/patient-usecase";
import { ValidationPipe } from "./pipes/validation.pipe";
import { EventPattern, Payload } from "@nestjs/microservices";
import { SignInDto } from "../core";

@Controller('patient')
export class PatientController {
    constructor(private patientUsecase: PatientUsecase) {}

    @Get('get')
    getPatient() {
        console.log('hi')
        return 'this.patientUsecase.getPatient()'
    }

    @Get('getall')
    getAllPatients() {
        return this.patientUsecase.getAllPatients()
    }

    @Post('create')
    createPatient(@Body(new ValidationPipe()) data: SignInDto) {
        console.log(data)
        return this.patientUsecase.createPatient(data)
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

    @EventPattern('ch1')
    async LoginPatient(@Payload() data: any) {
       console.log(data)
       this.patientUsecase.getPatient(data)
    }

    @EventPattern('ch2')
    async SignUpPatient(@Payload() data: any) {
    //    console.log(data)
       this.patientUsecase.createPatient(data)
    }
}
