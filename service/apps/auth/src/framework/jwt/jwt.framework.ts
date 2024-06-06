import { Injectable } from "@nestjs/common";
import { IJwtRepository } from "../../core";
import { JwtService } from "@nestjs/jwt";
import * as jose from "node-jose"
import { readFileSync } from "fs";

@Injectable()
export class JwtFramework implements IJwtRepository {
    privatePath = process.env.PUBLIC_KEY_PATH
    publicPath = process.env.PRIVATE_KEY_PATH

    constructor(private jwt: JwtService) {}

    private loadSecret(path: string) {
        return readFileSync(path)
    }

    createToken(data: object) {
        const secret = this.loadSecret(this.privatePath)

        const token = this.jwt.sign(data, {
            secret: secret,
            algorithm: 'RS256',
            expiresIn: '10s'
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

    refreshToken(data: object): string {
        const secret = this.loadSecret(this.privatePath)

        const token = this.jwt.sign(data, {
            secret: secret,
            algorithm: 'RS256',
            expiresIn: '1d'
        })
        
        return token
    }

    invalidateToken(data: object) {
        
    }

    async pemToJwk() : Promise<object> {
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