import { Injectable } from "@nestjs/common";
import { IJwtRepository } from "../core";

@Injectable()
export class AuthenticationUsecase {
    tokens = []
    constructor(private jwt: IJwtRepository) {
        this.tokens = []
    }

    create(data: object): object {
        const accessToken = this.jwt.createToken(data)
        const refreshToken = this.jwt.refreshToken(data)

        this.tokens.push(refreshToken)

        return { accessToken, refreshToken }
    }

    verify(payload: string) {
        return this.jwt.verifyToken(payload)
    }

    refresh(data: object) {
        return this.jwt.refreshToken(data)
    }
    
    async generateJwk() {
        return await this.jwt.pemToJwk()
    }
}