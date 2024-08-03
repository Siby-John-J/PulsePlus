import { Body, Controller, Delete, Get, Post, Put, Query } from "@nestjs/common";
import { AppoinetmentServiceUsecase } from "../usecase/appointment.service";
import { AppoinetmentEnitity } from "../core";

@Controller('appointment')
export class Appoinetment {
    constructor(private appointmentUsecase: AppoinetmentServiceUsecase ) {}

    @Get('get')
    async getAppointment(@Query() data: { id: string }) {
        console.log(data);
        
        const res = await this.appointmentUsecase.get(data.id)
        console.log(res);
        return res
        
    }
    
    @Post('create')
    async createAppointment(@Body() data: AppoinetmentEnitity) {
        return this.appointmentUsecase.create(data)
    }

    @Delete('delete')
    async deleteAppointment(@Query() data: { id: string }) {
        return this.appointmentUsecase.remove(data.id)
    }

    @Put('accept')
    async acceptAppointment(@Query() data: { id: string }) {
        return this.appointmentUsecase.change(data.id)
    }
}