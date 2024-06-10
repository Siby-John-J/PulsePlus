import { Injectable } from "@nestjs/common";
import { IPatientTokens, refreshTokenPayload } from "../core";

@Injectable()
export class PatientAuthsUsecase {
    constructor(private patientToken: IPatientTokens) {}

    async saveRefreshToken(payload: refreshTokenPayload) {
        const { refreshToken, ...query } = payload
        
        await this.patientToken.saveToken(query, refreshToken)
        return 'any'
    }

    async checkRefreshToken(data: any) {
        // console.log('tokkkkkkkk..');
        
        const { refreshTokens } = await this.patientToken.getToken(data)
        return refreshTokens
    }

    async logoutPatient(payload: string) {
        return this.patientToken.clearTokens(JSON.parse(payload))
    }
}
