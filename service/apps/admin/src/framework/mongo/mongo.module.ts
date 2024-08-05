import { Module } from "@nestjs/common";
import { IAppointment } from "../../core/abstract/IAppointment";
import { AppoinetmentSchema } from "./models/appoinetment.schema";
import { AppoinetmentRepository } from "./repositories/admin-rep.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Validation, ValidationSchema } from "./models/validation.schema";
import { ValidationtRepository } from "./repositories/validation.service";
import { IValidation } from "../../core/abstract/IValidation";
import { AppointPayments, AppointPaymentsSchema } from "./models/app-payments.schema";
import { IAppointmentPayment } from "../../core/abstract/IAppointmentPayment";
import { AppointmentPaymentRepository } from "./repositories/appoint-payment.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: 'Appoinetment',
                schema: AppoinetmentSchema
            },
            {
                name: Validation.name,
                schema: ValidationSchema
            },
            {
                name: AppointPayments.name,
                schema: AppointPaymentsSchema
            }
        ])
    ],
    providers: [
        {
            provide: IAppointment,
            useClass: AppoinetmentRepository
        },
        {
            provide: IValidation,
            useClass: ValidationtRepository
        },
        {
            provide: IAppointmentPayment,
            useClass: AppointmentPaymentRepository
        }
    ],
    exports: [IAppointment, IValidation, IAppointmentPayment]
})
export class MongoFrameWorkModule {}