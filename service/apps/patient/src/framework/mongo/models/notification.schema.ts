import { SchemaFactory, Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class Notification {
    @Prop()
    type: string

    @Prop()
    content: string

    @Prop()
    sender: string
}

export const NotificationSchema = SchemaFactory.createForClass(Notification)