import { Body, Controller, Delete, Get, Header, Headers, Post, UseGuards } from "@nestjs/common";
import { AuthenticationUsecase, AuthorizationUsecase } from "../usecase";
import { LoginDto, SignIn } from "../core";
import { RolesGuard } from "./guard";
import { SignUpDto } from "apps/patient/src/core";

@Controller('AuthH')
export class AuthenticationController {
    constructor(
        private auth: AuthenticationUsecase,
        private authZ: AuthorizationUsecase
    ) {}
    
    @Post('login')
    @UseGuards(RolesGuard)
    async login(@Body() body: LoginDto) {
        return this.auth.loginToAccount(body)
    }

    @Post('logout')
    logOut(@Body() body: SignIn) {
        // const res = this.authZ.verify(header)
        return this.auth.logoutFromAccount(body) 
    }

    @Post('signup')
    @UseGuards(RolesGuard)
    async signUp(@Body() body: SignUpDto) {
        console.log(body);

        // Check for roles
        
        
        return await this.auth.createAccount(body)
    }
}
