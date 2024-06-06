import { Injectable } from "@nestjs/common";
import { IPublisher, LoginDto, SignIn } from "../core";
import { SignUpDto } from "apps/patient/src/core";

@Injectable()
export class AuthenticationUsecase {
    constructor(private publisher: IPublisher) {}

    async loginToAccount(data: LoginDto) {
        return await this.publisher.publish('login', data)
    }

    async logoutFromAccount(payload: SignIn) {
        const { name, password } = payload
        
        return await this.publisher.publish('logout', JSON.stringify({
            name, password
        }))
    }
    
    async createAccount(data: SignUpDto) {
        return await this.publisher.publish('signup', data)
    }
}