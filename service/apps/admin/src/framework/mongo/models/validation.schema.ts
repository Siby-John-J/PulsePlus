import { SchemaFactory, Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class Validation {
    @Prop()
    title: string

    @Prop()
    created: Date

    @Prop()
    status: string

    @Prop()
    senderId: string
}

export const ValidationSchema = SchemaFactory.createForClass(Validation)