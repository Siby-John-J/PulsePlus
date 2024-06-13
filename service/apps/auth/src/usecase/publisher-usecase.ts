import { Injectable } from "@nestjs/common";
import { IPublisher, refreshTokenPayload } from "../core";

@Injectable()
export class PublisherUseCase {
    constructor(private publisher: IPublisher) {}

    saveRefreshToken(payload: refreshTokenPayload) {
        this.publisher.publish('save_token:patient', payload)
    }

    async checkRefreshToken(payload: object) {
        return await this.publisher.publish('check_token', payload)
    }
}