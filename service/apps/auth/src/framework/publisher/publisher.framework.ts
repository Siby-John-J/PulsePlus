import { IPublisher } from "../../core";
import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class PublisherFramework {
    constructor(
        @Inject('PATIENT') private client: ClientProxy
    ) {}

    publish(channel: string, payload: any) {
        this.client.emit(channel, payload)
    }
}