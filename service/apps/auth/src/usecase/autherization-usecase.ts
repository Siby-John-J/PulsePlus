import { Injectable } from "@nestjs/common";
import { IJwtRepository, SignIn, TokenResponseEntity } from "../core";
import { PublisherUseCase } from "./publisher-usecase";

@Injectable()
export class AuthorizationUsecase {
    constructor(
        private jwt: IJwtRepository,
        private publish: PublisherUseCase
    ) {}

    create(data: SignIn): TokenResponseEntity {
        const { name, password } = data

        const accessToken = this.jwt.createToken({
            name, password
        })
        const refreshToken = this.jwt.refreshToken({
            name, password
        })
        
        return { accessToken, refreshToken }
    }

    verify(payload: string) {
        return this.jwt.verifyToken(payload)
    }
    
    async refresh(data: object) {
        let accessToken = "token not found"
        
        const tokens = await this.publish.checkRefreshToken(data)
        
        if(tokens.length >= 1) {
            const token = this.verify(tokens[0])
            
            if(token) accessToken = this.jwt.createToken(data)
        }

        return { accessToken }
    }
    
    async generateJwk() {
        return await this.jwt.pemToJwk()
    }
}