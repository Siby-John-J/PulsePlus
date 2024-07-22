import { Body, Controller, Post } from "@nestjs/common";
import { AppointmentNotificationService } from "../usecase";
import { ISocket } from "../core";

@Controller('appointment')
export class AppointmentNotification {
    constructor(
        private readonly appointNotification: AppointmentNotificationService,
        // private readonly socket: ISocket
    ) {}

    @Post('publish')
    publishAppointment(@Body() data: any) {
        this.appointNotification.save(data)

        // this.socket.emitMessage(data, 'string')
    }
}