import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class CommunicationPublisherFramework {
    constructor(
        @Inject('COMMUNICATION') private client: ClientProxy
    ) {}

    async publish(channel: string, payload: any) {
        const res = await this.client.send(channel, payload)
        
        return new Promise(resolve => {
            res.subscribe(e => {
                resolve(e)
            })
        })
    }
}