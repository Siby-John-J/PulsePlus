import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { AuthenticationUsecase } from "../usecase";
import { LoginDto } from "../core";
import { LocalGuard } from "./guard";
import { SignUpDto } from "apps/patient/src/core";

@Controller('AuthH')
export class AuthenticationController {
    constructor(private auth: AuthenticationUsecase) {}
    
    @Post('login')
    @UseGuards(LocalGuard)
    async login(@Body() body: LoginDto) {
        return this.auth.loginToAccount(body)
    }

    @Get('logout')
    logOut() {
        return this.auth.logoutFromAccount()
    }

    @Post('signup')
    signUp(@Body() body: SignUpDto) {
        console.log(body);
        
        // return this.auth.createAccount(body)
    }
}
