import { Body, Controller, Delete, Get, Header, Headers, Post, UseGuards } from "@nestjs/common";
import { AuthenticationUsecase, AuthorizationUsecase } from "../usecase";
import { LoginDto, SignIn } from "../core";
import { LocalGuard } from "./guard";
import { SignUpDto } from "apps/patient/src/core";
import { body } from "express-validator";

@Controller('AuthH')
export class AuthenticationController {
    constructor(
        private auth: AuthenticationUsecase,
        private authZ: AuthorizationUsecase
    ) {}
    
    @Post('login')
    @UseGuards(LocalGuard)
    async login(@Body() body: LoginDto) {
        return this.auth.loginToAccount(body)
    }

    @Post('logout')
    logOut(@Body() body: SignIn) {
        // const res = this.authZ.verify(header)
        return this.auth.logoutFromAccount(body) 
    }

    @Post('signup')
    async signUp(@Body() body: SignUpDto) {
        console.log(body);

        // Check for roles
        
        
        return await this.auth.createAccount(body)
    }
}
