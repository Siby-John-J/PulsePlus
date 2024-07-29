import { Body, Controller, Delete, Get, Post, Query } from "@nestjs/common";
import { DoctorNotification } from "../core/entity/doctor-notification.entity";
import { AppointmentDoctorNotificationService } from "../usecase/doctor-app-noti.service";

@Controller('doctor_notification')
export class DoctorNotificationController {
    constructor(private readonly notification: AppointmentDoctorNotificationService) {}
    
    @Get('get')
    async getAll() {
        return await this.notification.getDoctorNotification()
    }

    @Post('create')
    async createOne(@Body() body: any) {
        
        // return await this.notification.createDoctorNotification(body)
    }

    @Delete('remove')
    async removeOne(@Query() data: { id: string }) {
        return await this.notification.removeDoctorNotification(data.id)
    }
}