import { Injectable } from "@nestjs/common";
import { IAdminTokens, refreshTokenPayload } from "../core";

@Injectable()
export class AatientTokenUsecase {
    constructor(private token: IAdminTokens) {}

    async saveRefreshToken(payload: refreshTokenPayload) {
        const { refreshToken, ...query } = payload
        
        await this.token.saveToken(query, refreshToken)
        return 'any'
    }

    async checkRefreshToken(data: any) {
        const { refreshTokens } = await this.token.getToken(data)
        
        return refreshTokens
    }

    async logoutPatient(payload: string) {
        return this.token.clearTokens(JSON.parse(payload))
    }
}
