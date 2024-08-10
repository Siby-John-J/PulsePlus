import { InjectModel } from "@nestjs/mongoose";
import { Notification } from "../models/notification.schema";
import { Model } from "mongoose";
import { TextChatEntity } from "../../../core"
import { ITextChat } from "apps/communication/src/core/abstracts/text-chat.abstract";
import { TextChat } from "../models/test-chat.schema";

export class TextChatRepository extends ITextChat {
    constructor(
        @InjectModel(TextChat.name) readonly textChat: Model<TextChatEntity>,
      ) {
        super();
    }

    async addText(payload: any): Promise<TextChatEntity> {
        const { receverId, senderId, text} = payload
        return await this.textChat.findOneAndUpdate({receverId, senderId}, { $push: { 'data': text }, isVisible: true }, {
            'returnDocument': 'after'
        })
    }

    async addToChat(data: TextChatEntity): Promise<TextChatEntity> {
        const { receverId, senderId } = data
        const res = await this.textChat.findOne({ senderId, receverId})

        if(!res) return await this.textChat.create(data)
        return { er: 'already created' }
    }

    async removeFromChat(receverId: string, senderId: string): Promise<TextChatEntity> {
        return await this.textChat.findOneAndDelete({receverId, senderId})
    }

    async getAllChat(id: string, role: string): Promise<TextChatEntity[]> {
        if(role === 'doctor') return await this.textChat.find({senderId: id})
        if(role === 'patient') return await this.textChat.find({receverId: id, isVisible: true})
    }
}