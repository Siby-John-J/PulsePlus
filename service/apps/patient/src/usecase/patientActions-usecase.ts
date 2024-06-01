import { Injectable } from "@nestjs/common";
import { IPatientActions, refreshTokenPayload } from "../core";

@Injectable()
export class PatientActionsUsecase {
    constructor(private patientActions: IPatientActions) {}

    async saveRefreshToken(payload: refreshTokenPayload) {
        const { refreshToken, ...query } = payload
        
        await this.patientActions.saveToken(query, refreshToken)
        return 'any'
    }

    async checkRefreshToken(data: any) {
        const { refreshTokens } = await this.patientActions.getToken(data)
        return refreshTokens
    }
}
