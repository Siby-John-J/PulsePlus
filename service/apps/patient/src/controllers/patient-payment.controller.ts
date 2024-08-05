import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { PatientPaymentUseCase } from "../usecase/patient-payment.usecase";

@Controller('payment')
export class PatientPaymentController {
    constructor(private payment: PatientPaymentUseCase) {}

    @Get('get_all')
    async getAllPayment() {
        // return await this.payment.createPayment({})
    }

    @Post('create')
    async createPayment(
        @Body() body: any,
        @Query() data: { id: string }
    ) {
        console.log(data);
        
        const res = await this.payment.createPayment(body, data.id)
        // console.log(res);
        return {res}
    }

    @Get('success')
    async successPayment() {
        return await this.payment.paymentSuccess()
    }

    @Get('failed')
    async failedPayment() {
        return await this.payment.paymentFailed()
    }
}