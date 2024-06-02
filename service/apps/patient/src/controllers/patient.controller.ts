import { Body, Controller, Delete, Get, Patch, Post } from "@nestjs/common";
import { PatientUsecase } from "../usecase/patient-usecase";
import { ValidationPipe } from "./pipes/validation.pipe";
import { Ctx, EventPattern, Payload, RmqContext } from "@nestjs/microservices";
import { SignInDto, refreshTokenPayload } from "../core";
import { RmqService } from "@app/common";
import { PatientActionsUsecase } from "../usecase";

@Controller('patient')
export class PatientController {
    constructor(
        private patientUsecase: PatientUsecase,
        private patientActionsUsecase: PatientActionsUsecase,
        private rmqService: RmqService
    ) {}

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

    @EventPattern('login')
    async LoginPatient(@Payload() data: any, @Ctx() context: RmqContext) {
       const res = await this.patientUsecase.getPatient(data)
       this.rmqService.ack(context)
       return res
    }

    @EventPattern('logout')
    async LogoutPatient(@Payload() data: any, @Ctx() context: RmqContext) {
       const res = await this.patientActionsUsecase.logoutPatient(data)
       this.rmqService.ack(context)
       return res
    }

    @EventPattern('signup')
    async SignUpPatient(@Payload() data: any,@Ctx() context: RmqContext) {
        this.patientUsecase.createPatient(data)
        this.rmqService.ack(context)
    }

    @EventPattern('save_token')
    saveRefreshToken(@Payload() data: refreshTokenPayload, @Ctx() context: RmqContext) {
        this.patientActionsUsecase.saveRefreshToken(data)
        this.rmqService.ack(context)
    }

    @EventPattern('check_token')
    async checkRefreshToken(@Payload() data: refreshTokenPayload, @Ctx() context: RmqContext) {
        const response = await this.patientActionsUsecase.checkRefreshToken(data)
        this.rmqService.ack(context)

        return response
    }
}