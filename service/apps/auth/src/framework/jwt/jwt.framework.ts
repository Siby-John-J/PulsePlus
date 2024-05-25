import { Injectable } from "@nestjs/common";
import { IJwtRepository } from "../../core";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class JwtFramework implements IJwtRepository {
    constructor(private jwt: JwtService) {}

    createToken(data: object) {
        const token = this.jwt.sign(data)
        
        return token
    }

    verifyToken(data: string) {
        const verified = this.jwt.verify(data)

        return verified
    }
}