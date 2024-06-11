import { SchemaFactory, Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class Appoinetment {
    @Prop()
    title: string

    @Prop()
    content: string

    @Prop()
    created: Date

    @Prop()
    status: string
}

export const AppoinetmentSchema = SchemaFactory.createForClass(Appoinetment)