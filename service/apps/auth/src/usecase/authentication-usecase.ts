import { Injectable } from "@nestjs/common";
import { IAdminPublisher, IPatientPublisher, LoginDto, SignIn } from "../core";
import { SignUpDto } from "apps/patient/src/core";

@Injectable()
export class AuthenticationUsecase {
    constructor(
        private patientPublisher: IPatientPublisher,
        private adminPublisher: IAdminPublisher
    ) {}
    
    async loginToAccount(data: LoginDto) {
        const { role, ...rest } = data
        let res = null
        
        console.log(role)
        
        if(role === 'patient') {
            res = await this.patientPublisher.publish('login', JSON.stringify(rest))
        } else if(role === 'admin') {
            res = await this.adminPublisher.publish('login', JSON.stringify(rest))
            console.log(res);
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
        return await this.patientPublisher.publish('signup', data)
    }
}