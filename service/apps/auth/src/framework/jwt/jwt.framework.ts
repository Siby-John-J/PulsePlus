import { Injectable } from "@nestjs/common";
import { IJwtRepository } from "../../core";
import { JwtService } from "@nestjs/jwt";
import * as jose from "node-jose"
import { readFileSync } from "fs";

@Injectable()
export class JwtFramework implements IJwtRepository {
    privatePath = 'E:/Hospital-Management/code/service/apps/auth/certs/private.pem'
    publicPath = 'E:/Hospital-Management/code/service/apps/auth/certs/public.pem'

    constructor(private jwt: JwtService) {}

    private loadSecret(path: string) {
        const secret = readFileSync(path)
        return secret
    }

    createToken(data: object) {
        const secret = this.loadSecret(this.privatePath)

        const token = this.jwt.sign(data, {
            secret: secret,
            algorithm: 'RS256',
            expiresIn: '1min'
        })
        
        return token
    }

    verifyToken(data: string) {
        try {
            const verified = this.jwt.verify(data, {
                secret: 'xxx'
            })
            return verified
            
        } catch (error) {
            console.log(error)
        }

    }

    refreshToken(data: object, tokens: string[]): string {
        // const secret = this.loadSecret(this.privatePath)

        const token = this.jwt.sign(data, {
            secret: 'xxx',
            // algorithm: 'RS256',
            // expiresIn: '1min'
        })
        
        return token
    }

    invalidateToken(data: object) {
        
    }

    async pemToJwk() : Promise<object>{
        const secret = this.loadSecret(this.privatePath)
        const keystore = jose.JWK.createKeyStore()

        const key = await keystore.add(secret, 'pem', {
            kid: 'keyId',
            use: 'sig',
            alg: 'RS256'
        })

        return key.toJSON(false)
    }
}