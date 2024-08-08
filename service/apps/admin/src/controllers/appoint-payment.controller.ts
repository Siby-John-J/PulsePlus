import { Body, Controller, Delete, Get, Post, Query } from "@nestjs/common";
import { AppointmenPaymentUsecase } from "../usecase/appo-payment.usecase";
import { MessagePattern, Payload } from "@nestjs/microservices";

@Controller('appoint_payment')
export class AppointPaymentsController {
    constructor(private appointPaymentUsecase: AppointmenPaymentUsecase) {}

    @MessagePattern('admin:appoint_create')
    async create(@Payload() data: string) {
        return await this.appointPaymentUsecase.createOne(JSON.parse(data))
    }

    @MessagePattern('admin:appoint_update')
    async update(@Payload() data: { payment_id: string, id: string }) {
        return await this.appointPaymentUsecase.updatePayment(data.id, { payment_id: data.payment_id })
    }

    @Post('create')
    async createPayment(@Body() data: any) {
        const { mainId, ...rest } = data
        const response = await this.appointPaymentUsecase.getOne(mainId)
        
        if(response) {
            return await this.appointPaymentUsecase.updatePayment(mainId, rest)
        }

        return { error: 'invalid request' }
    }

    @Delete('delete')
    async deletePayment(@Query() data: { id: string }) {
        return await this.appointPaymentUsecase.deletePayment(data.id)
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