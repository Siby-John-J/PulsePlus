import { SchemaFactory, Prop, Schema } from "@nestjs/mongoose";
import { Rate } from "apps/doctor/src/core";

@Schema()
export class GroupPoll {
    @Prop()
    question: string

    @Prop()
    options: Rate[]

    @Prop()
    voters: string[]
    
    @Prop()
    type: string

    @Prop()
    senderId: string
    
    @Prop()
    groupId: string
    
    @Prop()
    time: Date
}

export const GroupPollSchema = SchemaFactory.createForClass(GroupPoll)
