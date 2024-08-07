import { Body, Controller, Delete, Get, Post, Query } from "@nestjs/common";
import { AppointmentDoctorNotificationService } from "../usecase/doctor-app-noti.service";

@Controller('doctor_notification')
export class DoctorNotificationController {
    constructor(private readonly notification: AppointmentDoctorNotificationService) {}
    
    @Get('get')
    async getAll(@Query() data: { id: string }) {
        return await this.notification.getDoctorNotification(data.id)
    }

    @Get('getOne')
    async getByOne(@Query() data: { id: string, param: string }) {
        const { id, param } = data
        
        return await this.notification.getOneDoctorNotification(id, param)
    }

    @Post('create')
    async createOne(@Body() body: any) {
        return await this.notification.createDoctorNotification(body)
    }

    @Delete('remove')
    async removeOne(@Query() data: { id: string }) {
        return await this.notification.removeDoctorNotification(data.id)
    }
}