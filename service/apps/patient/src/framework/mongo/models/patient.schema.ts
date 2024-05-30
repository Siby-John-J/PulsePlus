import { SchemaFactory, Prop, Schema } from "@nestjs/mongoose";
import { Family } from "./family.schema";
import { Notification } from "./notification.schema";

@Schema()
export class Patient {
    @Prop()
    id: string

    @Prop()
    name: string

    @Prop()
    age: number

    @Prop()
    email: string

    @Prop()
    password: string

    @Prop()
    phone: string

    @Prop()
    dob: Date

    @Prop()
    image: string

    @Prop()
    status: string

    @Prop()
    family: Family
    
    @Prop()
    notifications: Notification
}

export const PatientSchema = SchemaFactory.createForClass(Patient)
