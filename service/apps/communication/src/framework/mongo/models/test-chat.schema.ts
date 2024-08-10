import { SchemaFactory, Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class TextChat {
    @Prop()
    senderId: string

    @Prop()
    receverId: string

    @Prop({type: Object})
    data: object

    @Prop()
    unreaded: number

    @Prop()
    isVisible: boolean
}

export const TextChatSchema = SchemaFactory.createForClass(TextChat)