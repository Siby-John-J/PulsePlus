import { Body, Controller, Post } from "@nestjs/common";
import { AppointmentNotificationService } from "../usecase";
import { AppointmentNotificationEntity, ISocket } from "../core";
import { MessagePattern, Payload } from "@nestjs/microservices";

@Controller('appointment')
export class AppointmentNotificationController {
    constructor(
        private readonly appointNotification: AppointmentNotificationService,
        // private readonly socket: ISocket
    ) {}

    @MessagePattern('appointment:post')
    postAppointment(@Payload() data: any) {
        
    }

    @Post('publish')
    async publishAppointment(@Body() body: AppointmentNotificationEntity)
        {
        
        return await this.appointNotification.save(body)

        // this.socket.emitMessage(data, 'string')
    }
}