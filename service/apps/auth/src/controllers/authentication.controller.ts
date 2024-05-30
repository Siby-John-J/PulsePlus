import { Body, Controller, Get, Inject, Post, UseGuards } from "@nestjs/common";
import { AuthenticationUsecase } from "../usecase";
import { LoginDto } from "../core";
import { LocalGuard } from "./guard";
import { ClientProxy } from "@nestjs/microservices";
import { SignUpDto } from "apps/patient/src/core";

@Controller('AuthH')
export class AuthenticationController {
    constructor(
        private auth: AuthenticationUsecase,
        @Inject('PATIENT') private client : ClientProxy
    ) {}
    
    @Post('login')
    // @UseGuards(LocalGuard)
    async login(@Body() body: LoginDto) {
        this.client.emit('ch1', body)
        return this.auth.loginToAccount(body)
    }

    @Get('logout')
    logOut() {
        return this.auth.logoutFromAccount()
    }

    @Post('signup')
    signUp(@Body() body: SignUpDto) {
        // console.log(body)
        this.client.emit('ch2', body)
        return this.auth.createAccount()
    }
}
