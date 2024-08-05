import { SchemaFactory, Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class AppointPayments {
    @Prop()
    patientId: string
    
    @Prop()
    source: string
    
    @Prop()
    payment_id: string
    
    @Prop()
    amount: number
    
    @Prop()
    date: string
    
    @Prop()
    diagnosys: string
    
    @Prop()
    type: string
}

export const AppointPaymentsSchema = SchemaFactory.createForClass(AppointPayments)