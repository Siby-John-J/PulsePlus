import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class PatientPublisherFramework {
    constructor(
        @Inject('PATIENT') private client: ClientProxy
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

@Injectable()
export class AdminPublisherFramework {
    constructor(
        @Inject('ADMIN') private client: ClientProxy
    ) {}

    async publish(channel: string, payload: any) {
        
        const res = await this.client.send(channel, JSON.parse(payload))
        // console.log(res.source.subscribe(e => console.log(e)))
        
        return new Promise(resolve => {
            res.subscribe(e => {
                resolve(e)
            })
        })
    }
}