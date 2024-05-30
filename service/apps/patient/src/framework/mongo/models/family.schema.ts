import { SchemaFactory, Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class Family {
    @Prop()
    name: string

    @Prop()
    relation: string

    @Prop()
    image: string
}

export const FamilySchema = SchemaFactory.createForClass(Family)