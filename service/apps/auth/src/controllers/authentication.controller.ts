import { Controller, Get, Inject, Post } from "@nestjs/common";
import { AuthenticationUsecase } from "../usecase";
import { ClientProxy } from "@nestjs/microservices";
import { lastValueFrom } from "rxjs";

@Controller('AuthH')
export class AuthenticationController {
    constructor(
        private auth: AuthenticationUsecase,
        @Inject('PATIENT') private patientClient: ClientProxy
    ) {}
    
    @Get('login')
    async login() {
        this.patientClient.emit('memes', 'lol')
        // return await lastValueFrom()
        return this.auth.loginToAccount()
    }

    @Get('logout')
    logOut() {
        return this.auth.logoutFromAccount()
    }

    @Post('signup')
    signUp() {
        return this.auth.createAccount()
    }
}
