import { Body, Controller, Delete, Get, Header, Headers, Post, UseGuards } from "@nestjs/common";
import { AuthenticationUsecase, AuthorizationUsecase } from "../usecase";
import { LoginDto } from "../core";
import { LocalGuard } from "./guard";
import { SignUpDto } from "apps/patient/src/core";

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

    @Delete('logout')
    logOut(@Headers('Authorization') header: string) {
        const res = this.authZ.verify(header)
        
        if(res) {
            return this.auth.logoutFromAccount(res)
        }
        
    }

    @Post('signup')
    signUp(@Body() body: SignUpDto) {
        console.log(body);
        
        // return this.auth.createAccount(body)
    }
}
