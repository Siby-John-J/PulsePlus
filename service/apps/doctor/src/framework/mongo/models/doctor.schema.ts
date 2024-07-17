import { SchemaFactory, Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class Doctor {
    @Prop()
    name: string

    @Prop()
    email: string

    @Prop()
    place: string

    @Prop()
    address: string

    @Prop()
    degree: string

    @Prop()
    department: string

    @Prop()
    password: string

    @Prop()
    phone: number

    @Prop()
    image: string

    @Prop()
    status: string

    @Prop()
    refreshTokens: string[]
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor)
