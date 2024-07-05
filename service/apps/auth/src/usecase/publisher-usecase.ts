import { Injectable } from "@nestjs/common";
import { IAdminPublisher, IPatientPublisher, refreshTokenPayload } from "../core";

@Injectable()
export class PublisherUseCase {
    constructor(
        private patientPublisher: IPatientPublisher,
        private adminPublisher: IAdminPublisher
    ) {}

    saveRefreshToken(role: string, payload: refreshTokenPayload) {
        if(role === 'admin') {
            this.adminPublisher.publish('save_token:admin', payload)
        } else if(role === 'patient') {
            this.patientPublisher.publish('save_token:patient', payload)
        }
    }

    async checkRefreshToken(payload: object) {
        return await this.patientPublisher.publish('check_token', payload)
    }
}