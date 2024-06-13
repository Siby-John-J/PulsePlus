import { IsEmail, IsString } from "class-validator";

export class LoginDto {
    @IsEmail()
    username: string

    @IsString()
    password: string

    @IsString()
    roles: 'patient:login' | 'admin:login' | 'doctor:login'
}