import { Injectable } from "@nestjs/common";
import { IPatientNotes, IPayment, Note } from "../core";

@Injectable()
export class PatientPaymentUseCase {
    constructor(private payment: IPayment) {}

    async createPayment(data: any, id: string) {
        return await this.payment.createPayment(data, id)
    }

    async getPayment() {
        
    }

    async paymentSuccess() {
        return { success: true }
    }

    async paymentFailed() {
        return { failed: true }
    }
}