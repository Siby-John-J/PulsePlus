import { Injectable } from "@nestjs/common";
import { IJwtRepository } from "../core";

@Injectable()
export class AuthorizationUsecase {
    tokens = []
    constructor(private jwt: IJwtRepository) {}

    create(data: object): object {
        const accessToken = this.jwt.createToken(data)
        const refreshToken = this.jwt.refreshToken(data, this.tokens)

        this.tokens.push(refreshToken)
        
        return { accessToken, refreshToken }
    }

    verify(payload: string) {
        return this.jwt.verifyToken(payload)
    }

    refresh(data: object) {
        let accessToken = null
        if(this.tokens.includes(data['token'])) {
            const token = this.verify(data['token'])
            
            if(token) accessToken = this.jwt.createToken(data)
        }

        return accessToken
    }
    
    async generateJwk() {
        return await this.jwt.pemToJwk()
    }
}