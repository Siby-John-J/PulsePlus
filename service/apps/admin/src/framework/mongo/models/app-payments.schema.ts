import { SchemaFactory, Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class AppointPayments {
    @Prop()
    patientId: string

    @Prop()
    doctorId: string

    @Prop()
    amount: number

    @Prop()
    date: string
}

export const AppointPaymentsSchema = SchemaFactory.createForClass(AppointPayments)