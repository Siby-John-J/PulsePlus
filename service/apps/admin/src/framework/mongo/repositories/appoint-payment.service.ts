import { InjectModel } from "@nestjs/mongoose";
import {  AppointmentPaymentEntity } from "apps/admin/src/core";
import { Model } from "mongoose";
import { AppointPayments } from "../models/app-payments.schema";
import { IAppointmentPayment } from "apps/admin/src/core/abstract/IAppointmentPayment";

export class AppointmentPaymentRepository extends IAppointmentPayment {
    constructor(
        @InjectModel(AppointPayments.name) readonly paymentsSchema: Model<AppointmentPaymentEntity>,
      ) {
        super();
    }

    async create(payload: AppointmentPaymentEntity): Promise<AppointmentPaymentEntity> {
        return await this.paymentsSchema.create(payload)
    }

    async getAll(): Promise<AppointmentPaymentEntity[]> {
        return await this.paymentsSchema.find()
    }

    async getForPatient(id: string): Promise<AppointmentPaymentEntity[]> {
        return await this.paymentsSchema.find({patientId: id})
    }

    async updatePayment(data: any, id: string): Promise<AppointmentPaymentEntity> {
        return await this.paymentsSchema.findOneAndUpdate({patientId: id}, data)
    }

    async deletePayment(id: string): Promise<any> {
        return await this.paymentsSchema.deleteOne({_id: id})
    }
}