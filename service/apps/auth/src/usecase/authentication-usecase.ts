import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthenticationUsecase {

    loginToAccount() {
        return 'callMicro'
    }

    logoutFromAccount() {
        return 'callMicro2'
    }

    createAccount() {
        return 'callMicro3'
    }
}