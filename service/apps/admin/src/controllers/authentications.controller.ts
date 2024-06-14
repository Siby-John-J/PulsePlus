import { Controller } from "@nestjs/common";
import { Ctx, EventPattern, Payload, RmqContext } from "@nestjs/microservices";

@Controller('auth')
export class AuthenticationController {
    // constructor(private ) {}

    @EventPattern('admin:login')
    login(@Payload() data: any, @Ctx() context: RmqContext) {
        console.log('admins');
        console.log(data);
        
        
        return { hi: 'admin' }
    }
}