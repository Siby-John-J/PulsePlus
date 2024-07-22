import { SchemaFactory, Prop, Schema } from "@nestjs/mongoose";

@Schema()
class Content {
    @Prop()
    name: string
    
    @Prop()
    age: number
    
    @Prop()
    deceaseDiscription: string

}

@Schema()
export class AppointmentNotification {
    @Prop()
    title: string
    
    @Prop()
    content: Content
    
    @Prop()
    appointmentId: string
}


export const AppointmentNotificationSchema = SchemaFactory.createForClass(AppointmentNotification)