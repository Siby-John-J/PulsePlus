import { Controller, Get, Post } from "@nestjs/common";

@Controller('appoint_payment')
export class AppointPaymentsController {
    constructor() {}

    @Post('create')
    async createPayment() {

    }

    @Post('getForPatient')
    async getPaymentForPatient() {

    }

    @Get('getAll')
    async getAllPayments() {
        
    }
}