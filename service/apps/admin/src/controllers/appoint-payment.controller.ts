import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { AppointmentPaymentEntity } from "../core";
import { AppointmenPaymentUsecase } from "../usecase/appo-payment.usecase";

@Controller('appoint_payment')
export class AppointPaymentsController {
    constructor(private appointPaymentUsecase: AppointmenPaymentUsecase) {}

    @Post('create')
    async createPayment(@Body() data: AppointmentPaymentEntity) {
        return await this.appointPaymentUsecase.createOne(data)
    }

    @Get('getForPatient')
    async getPaymentForPatient(@Query() data: { id: string }) {
        return await this.appointPaymentUsecase.getForPatient(data.id)
    }

    @Get('getAll')
    async getAllPayments() {
        return await this.appointPaymentUsecase.getAll()
    }
}