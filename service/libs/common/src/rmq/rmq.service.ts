import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Transport, RmqOptions, RmqContext } from "@nestjs/microservices";

@Injectable()
export class RmqService {
    constructor(private configService: ConfigService) {}

    getOptions(queue: string, noAck = false): RmqOptions {
        return {
            transport: Transport.RMQ,
            options: {
                urls: [this.configService.get<string>('RABBIT_MQ_URI')],
                queue: this.configService.get<string>(`RABBIT_MQ_${queue}_QUEUE`),
                noAck,
                persistent: true
            }
        }
    }
    
    ack(context: RmqContext) {
        const channel = context.getChannelRef()
        const message = context.getMessage()
        channel.ack(message)
    }
}