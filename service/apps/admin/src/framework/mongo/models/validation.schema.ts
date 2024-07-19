import { SchemaFactory, Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class Validation {
    @Prop()
    name: string
    
    @Prop()
    department: string
    
    @Prop()
    degree: string

    @Prop()
    title: string

    @Prop()
    created: string

    @Prop()
    status: string

    @Prop()
    senderId: string
}

export const ValidationSchema = SchemaFactory.createForClass(Validation)