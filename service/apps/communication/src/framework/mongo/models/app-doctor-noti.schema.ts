import { SchemaFactory, Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class AppointDoctorNotification {
    @Prop()
    title: string

    @Prop()
    date: string

    @Prop()
    duration: string

    @Prop()
    amount: number

    @Prop()
    senderId: string
}

export const AppointDoctorNotificationSchema = SchemaFactory.createForClass(AppointDoctorNotification)