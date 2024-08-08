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
        const response = 
            await this.adminPublish.publish('admin:appoint_create',
                JSON.stringify({patientId: data.id})
            )

        const dat = body
        dat._id = response._id
        
        // admin:appoint_update
        // payment_id: res.payment_id
        const res = await this.payment.createPayment(dat, data.id)

        await this.adminPublish.publish('admin:appoint_update',
            JSON.stringify({payment_id: res.payment_id, id: response._id})
        )
        
        return {_id: response._id, res}
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