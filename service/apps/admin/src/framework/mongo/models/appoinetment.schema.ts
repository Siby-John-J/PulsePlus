import { SchemaFactory, Prop, Schema } from "@nestjs/mongoose";
import { RecordsEntity } from "../../../core";

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

    @Prop()
    senderId: string

    @Prop()
    time: Date

    @Prop()
    span: string

    @Prop()
    accept: string

    @Prop()
    records: RecordsEntity

    @Prop()
    duration: string[]

    @Prop()
    date: string
}

export const AppoinetmentSchema = SchemaFactory.createForClass(Appoinetment)