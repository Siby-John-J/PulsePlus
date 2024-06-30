import { Injectable } from "@nestjs/common";
import { IPatientPublisher, refreshTokenPayload } from "../core";

@Injectable()
export class PublisherUseCase {
    constructor(private publisher: IPatientPublisher) {}

    saveRefreshToken(payload: refreshTokenPayload) {
        this.publisher.publish('save_token:patient', payload)
    }

    async checkRefreshToken(payload: object) {
        return await this.publisher.publish('check_token', payload)
    }
}