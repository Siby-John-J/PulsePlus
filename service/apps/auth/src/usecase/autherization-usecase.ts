import { Injectable } from "@nestjs/common";
import { IJwtRepository, TokenResponseEntity } from "../core";
import { PublisherUseCase } from "./publisher-usecase";

@Injectable()
export class AuthorizationUsecase {
    constructor(
        private jwt: IJwtRepository,
        private publish: PublisherUseCase
    ) {}

    create(data: object): TokenResponseEntity {
        const accessToken = this.jwt.createToken(data)
        const refreshToken = this.jwt.refreshToken(data)
        
        return { accessToken, refreshToken }
    }

    verify(payload: string) {
        return this.jwt.verifyToken(payload)
    }

    async refresh(data: object) {
        let accessToken = null
        
        const tokens = await this.publish.checkRefreshToken(data)
        // console.log(tokens)
        
        if(tokens) {
            const token = this.verify(tokens[1])
            console.log(token);
            console.log(data);
            
            
            // if(token) accessToken = this.jwt.createToken(data)
        }

        return {pro:'accessToken'}
    }
    
    async generateJwk() {
        return await this.jwt.pemToJwk()
    }
}