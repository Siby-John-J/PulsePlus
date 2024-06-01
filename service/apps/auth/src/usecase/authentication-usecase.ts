import { Injectable } from "@nestjs/common";
import { IPublisher, LoginDto } from "../core";
import { SignUpDto } from "apps/patient/src/core";

@Injectable()
export class AuthenticationUsecase {
    constructor(private publisher: IPublisher) {}

    async loginToAccount(data: LoginDto) {
        return await this.publisher.publish('login', data)
    }

    logoutFromAccount() {
        return 'callMicro2'
    }

    createAccount(data: SignUpDto) {
        this.publisher.publish('signup', data)
        return 'callMicro3'
    }
}