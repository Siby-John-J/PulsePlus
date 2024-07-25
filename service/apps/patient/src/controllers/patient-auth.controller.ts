import { Controller } from "@nestjs/common";
import { PatientUsecase } from "../usecase";
import { Ctx, EventPattern, Payload, RmqContext } from "@nestjs/microservices";
import { refreshTokenPayload } from "../core";
// import { RmqService } from "@app/common";
import { PatientAuthsUsecase } from "../usecase";

@Controller('patient')
export class PatientAuthController {
    constructor(
        private patientUsecase: PatientUsecase,
        private patientAuthsUsecase: PatientAuthsUsecase,
        // private rmqService: RmqService
    ) {}

    @EventPattern('patient')
    testP(@Payload() data: any, @Ctx() context: RmqContext) {
        console.log(data);
        
        // this.rmqService.ack(context)
        
        return { msg: 'from patient' }
    }
    
    @EventPattern('login:patient')
    async LoginPatient(@Payload() data: any) {
        const { auth, ...rest } = JSON.parse(data)
        
        
       const res = await this.patientUsecase.getPatient({
        email: rest.username,
        password: rest.password
       })
       
       return res
    }
    
    @EventPattern('logout:patient')
    async LogoutPatient(@Payload() data: any) {
        console.log(data)
        
       const res = await this.patientAuthsUsecase.logoutPatient(data)
    //    this.rmqService.ack(context)
        console.log(res);
        
       return res
    }

    @EventPattern('patient:signup')
    async SignUpPatient(@Payload() data: any) {
        const res = await this.patientUsecase.createPatient(JSON.parse(data))
        // this.rmqService.ack(context)
        console.log(res);
        
        return res
    }

    @EventPattern('save_token:patient')
    saveRefreshToken(@Payload() data: refreshTokenPayload, @Ctx() context: RmqContext) {
        this.patientAuthsUsecase.saveRefreshToken(data)
        // this.rmqService.ack(context)
    }

    @EventPattern('check_token')
    async checkRefreshToken(@Payload() data: refreshTokenPayload, @Ctx() context: RmqContext) {
        const response = await this.patientAuthsUsecase.checkRefreshToken(data)
        // this.rmqService.ack(context)

        return response
    }
}