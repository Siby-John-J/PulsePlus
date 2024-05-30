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
        const secret = this.loadSecret(this.privatePath)

        try {
            const verified = this.jwt.verify(data, {
                secret: secret
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

    async pemToJwk() : Promise<object> {
        console.log('pemJwk')
        const secret = this.loadSecret(this.privatePath)
        const keystore = jose.JWK.createKeyStore()

        // const payload = {
        //     sub: 'user123',
        //     name: 'John Doe', 
        //     roles: ['admin', 'user'], 
        // };
    
        // const jwt = await jose.JWS.createSign({ format: 'compact' }, { key })
        //   .update(JSON.stringify(payload))
        //   .final();

        const key = await keystore.add(secret, 'pem', {
            kid: 'keyId',
            use: 'sig',
            alg: 'RS256',
            // roles: jwt
        })

        return key.toJSON(false)
    }
}