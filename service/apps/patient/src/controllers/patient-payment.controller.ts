import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { PatientPaymentUseCase } from "../usecase/patient-payment.usecase";
import { IAdminPublisher } from "../core";

@Controller('payment')
export class PatientPaymentController {
    private globalData = {}
    constructor(
        private payment: PatientPaymentUseCase,
        private adminPublish: IAdminPublisher,
    ) {}

    @Get('get_all')
    async getAllPayment() {

        // return await this.payment.createPayment({})
    }

    @Post('create')
    async createPayment(
        @Body() body: any,
        @Query() data: { id: string }
    ) {
        const res = await this.payment.createPayment(body, data.id)
        const response = 
            await this.adminPublish.publish('admin:appoint_create', JSON.stringify({payment_id: res.payment_id, patientId: data.id}))
        return {res}
    }

    @Get('success')
    async successPayment(@Query() data: { id: string }) {
        console.log(this.globalData);
        
        this.globalData = {}
        return await fetch(`http://localhost:5173/patient/payment/success?id=${data.id}`)
    }

    @Get('failed')
    async failedPayment() {
        return await this.payment.paymentFailed()
    }
}