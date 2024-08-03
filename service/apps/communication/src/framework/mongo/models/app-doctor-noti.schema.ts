import { SchemaFactory, Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class AppointDoctorNotification {
    @Prop()
    span: string
    
    @Prop()
    date: string
    
    @Prop()
    startTime: string

    @Prop()
    endTime: string

    @Prop()
    fee: number
    
    @Prop()
    senderId: string
    
    @Prop()
    diagnosys: string

    @Prop()
    type: string

}

export const AppointDoctorNotificationSchema = SchemaFactory.createForClass(AppointDoctorNotification)