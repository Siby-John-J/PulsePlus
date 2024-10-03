import { SchemaFactory, Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class Group {
    @Prop()
    name: string

    @Prop()
    admin: string

    @Prop()
    created: Date

    @Prop()
    members: []

    @Prop()
    memberLimit: number

    @Prop()
    max_group_members: number

    @Prop()
    description: string

    @Prop()
    messages: []
    
    @Prop()
    department: string

    @Prop()
    image: string

    @Prop()
    isBlock: boolean
}

export const GroupSchema = SchemaFactory.createForClass(Group)
