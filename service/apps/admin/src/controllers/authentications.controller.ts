import { RmqService } from "@app/common";
import { Controller } from "@nestjs/common";
import { Ctx, EventPattern, Payload, RmqContext } from "@nestjs/microservices";

@Controller('auth')
export class AuthenticationController {
    constructor(private rmqService: RmqService) {}

    @EventPattern('login')
    login(@Payload() data: any, @Ctx() context: RmqContext) {
        console.log('admins');
        console.log(data);
        
        this.rmqService.ack(context)
        return { hi: 'admin' }
    }
}