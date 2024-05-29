import { IsEmail, IsNotEmpty, IsNumber, IsString, IsStrongPassword } from "class-validator"

export class PatientDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsNumber()
    age: number

    @IsString()
    id: string

    @IsEmail()
    email: string

    @IsStrongPassword()
    password: string
}