import { Injectable } from "@nestjs/common";
import { IAdminPublisher, IDoctorPublisher, IPatientPublisher, LoginDto, SignIn } from "../core";
import { SignUpDto } from "apps/patient/src/core";

@Injectable()
export class AuthenticationUsecase {
    constructor(
        private patientPublisher: IPatientPublisher,
        private adminPublisher: IAdminPublisher,
        private doctorPublisher: IDoctorPublisher
    ) {}
    
    async loginToAccount(data: LoginDto) {
        const { role, ...rest } = data
        let res = null
        
        if(role === 'patient') {
            res = await this.patientPublisher.publish('login:patient', JSON.stringify(rest))
        } else if(role === 'admin') {
            res = await this.adminPublisher.publish('login:admin', JSON.stringify(rest))
        } else if(role === 'doctor') {
            res = await this.doctorPublisher.publish('login:doctor', JSON.stringify(rest))
        }
        
        return res
    }

    async logoutFromAccount(payload: SignIn) {
        const { name, password } = payload
        
        return await this.patientPublisher.publish('logout', JSON.stringify({
            name, password
        }))
    }
    
    async createAccount(data: SignUpDto) {
        const { role, ...rest } = data
        let res = null

        if(role === 'patient') {
            res = await this.patientPublisher.publish('patient:signup', JSON.stringify(rest))
        } else if(role === 'doctor') {
            res = await this.doctorPublisher.publish('signup', JSON.stringify(rest))
        }
        return res
    }
}