import { Injectable } from "@nestjs/common";
import { IPublisher, LoginDto } from "../core";

@Injectable()
export class AuthenticationUsecase {
    constructor(private publisher: IPublisher) {}

    loginToAccount(data: LoginDto) {
        // this.publisher.publish('ch1', data)
        return 'callMicro'
    }

    logoutFromAccount() {
        return 'callMicro2'
    }

    createAccount() {
        return 'callMicro3'
    }
}