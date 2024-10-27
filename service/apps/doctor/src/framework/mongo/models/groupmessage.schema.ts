import { SchemaFactory, Prop, Schema } from "@nestjs/mongoose";
import { Rate } from "apps/doctor/src/core";

@Schema()
export class GroupMessage {
    @Prop()
    data: string[]
    
    @Prop()
    type: string

    @Prop()
    senderId: string
    
    @Prop()
    groupId: string
    
    @Prop()
    time: Date

    @Prop()
    visibleFor: string[]

    @Prop()
    secret: boolean

    @Prop()
    caption: string
}

export const GroupMessageSchema = SchemaFactory.createForClass(GroupMessage)
