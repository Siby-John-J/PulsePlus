import { Body, Controller, Delete, Get, Post, Query } from "@nestjs/common";
import { AppointmentDoctorNotificationService } from "../usecase/doctor-app-noti.service";

@Controller('doctor_notification')
export class DoctorNotificationController {
    constructor(private readonly notification: AppointmentDoctorNotificationService) {}
    
    @Get('get')
    async getAll(@Query() data: { id: string }) {
        return await this.notification.getDoctorNotification(data.id)
    }

    @Post('create')
    async createOne(@Body() body: any) {
        console.log(body);
        
        return await this.notification.createDoctorNotification(body)
    }

    @Delete('remove')
    async removeOne(@Query() data: { id: string }) {
        return await this.notification.removeDoctorNotification(data.id)
    }
}