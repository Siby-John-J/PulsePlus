import { IsEmail, IsString, IsStrongPassword } from "class-validator";

export class SignUpDto {
    @IsString()
    name: string

    @IsEmail()
    email: string

    @IsStrongPassword()
    password: string

    @IsString()
    degree: string

    @IsString()
    department: string

    @IsString()
    role: 'patient' | 'doctor'
}