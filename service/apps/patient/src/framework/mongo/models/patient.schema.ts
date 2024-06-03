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
    place: string

    @Prop()
    address: string

    @Prop()
    blood_group: string

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
    gender: string

    @Prop()
    family: Family
    
    @Prop()
    notifications: Notification

    @Prop()
    refreshTokens: string[]
}

export const PatientSchema = SchemaFactory.createForClass(Patient)
