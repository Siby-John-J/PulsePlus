import { Body, Controller, Get, Post } from "@nestjs/common";
import { body } from "express-validator";

@Controller('payment')
export class PatientPaymentController {
    constructor(private some: Array<number>) {}

    @Get('get_all')
    getAllPayment() {

    }

    @Post('create')
    createPayment(@Body() body: any) {

    }
}