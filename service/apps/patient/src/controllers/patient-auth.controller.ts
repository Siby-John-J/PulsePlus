import { Controller } from "@nestjs/common";
import { PatientUsecase } from "../usecase/patient-usecase";
import { Ctx, EventPattern, Payload, RmqContext } from "@nestjs/microservices";
import { SignInDto, refreshTokenPayload } from "../core";
import { RmqService } from "@app/common";
import { PatientAuthsUsecase } from "../usecase";

@Controller('patient')
export class PatientAuthController {
    constructor(
        private patientUsecase: PatientUsecase,
        private patientAuthsUsecase: PatientAuthsUsecase,
        private rmqService: RmqService
    ) {}

    @EventPattern('login')
    async LoginPatient(@Payload() data: any, @Ctx() context: RmqContext) {
        const { auth, ...rest } = data
        
       const res = await this.patientUsecase.getPatient(rest)
       this.rmqService.ack(context)
       return res
    }

    @EventPattern('logout')
    async LogoutPatient(@Payload() data: any, @Ctx() context: RmqContext) {
       const res = await this.patientAuthsUsecase.logoutPatient(data)
       this.rmqService.ack(context)
       return res
    }

    @EventPattern('signup')
    async SignUpPatient(@Payload() data: any,@Ctx() context: RmqContext) {
        const res = this.patientUsecase.createPatient(data)
        this.rmqService.ack(context)
        return res
    }

    @EventPattern('save_token')
    saveRefreshToken(@Payload() data: refreshTokenPayload, @Ctx() context: RmqContext) {
        this.patientAuthsUsecase.saveRefreshToken(data)
        this.rmqService.ack(context)
    }

    @EventPattern('check_token')
    async checkRefreshToken(@Payload() data: refreshTokenPayload, @Ctx() context: RmqContext) {
        const response = await this.patientAuthsUsecase.checkRefreshToken(data)
        this.rmqService.ack(context)

        return response
    }
}