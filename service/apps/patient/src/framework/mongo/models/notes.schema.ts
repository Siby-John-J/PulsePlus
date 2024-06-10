import { SchemaFactory, Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class Note {
    @Prop()
    title: string

    @Prop()
    content: string

    @Prop()
    patientId: string

    @Prop()
    Date: Date
}

export const NotesSchema = SchemaFactory.createForClass(Note)