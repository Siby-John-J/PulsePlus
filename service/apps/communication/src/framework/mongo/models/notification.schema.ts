import { SchemaFactory, Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class Notification {
    @Prop()
    content: string

    @Prop()
    senderId: string
}

export const NotificationSchema = SchemaFactory.createForClass(Notification)