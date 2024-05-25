import { Injectable } from "@nestjs/common";
import { IJwtRepository } from "../core";

@Injectable()
export class AuthenticationUsecase {
    constructor(private jwt: IJwtRepository) {}

    create(data: object) {
        return this.jwt.createToken(data)
    }

    verify(payload: string) {
        return this.jwt.verifyToken(payload)
    }
}