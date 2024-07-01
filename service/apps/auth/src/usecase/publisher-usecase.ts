import { Injectable } from "@nestjs/common";
import { IAdminPublisher, IPatientPublisher, refreshTokenPayload } from "../core";

@Injectable()
export class PublisherUseCase {
    constructor(
        private publisher: IPatientPublisher,
        private publisher2: IAdminPublisher
    ) {}

    saveRefreshToken(payload: refreshTokenPayload) {
        this.publisher.publish('save_token:patient', payload)
    }

    async checkRefreshToken(payload: object) {
        return await this.publisher.publish('check_token', payload)
    }

    testUsecase() {
        this.publisher.publish('patient', {msg: 'from auth'})
        this.publisher2.publish('admin', {msg: 'from auth'})
    }
}