import { SchemaFactory, Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class Patient {
    @Prop()
    name: string

    @Prop()
    age: number

    @Prop()
    email: string

    @Prop()
    password: string
}

export const PatientSchema = SchemaFactory.createForClass(Patient)
