import { Injectable } from "@nestjs/common";
import { ITextChat } from "../core/abstracts/text-chat.abstract";
import { TextChatEntity } from "../core";

@Injectable()
export class TextChatServiceUsecase {
    constructor(private textChat: ITextChat) {}

    async addChat(data: TextChatEntity) {
        return await this.textChat.addToChat(data)
    }

    async removeChat(receverId: string, senderId: string) {
        return await this.textChat.removeFromChat(receverId, senderId)
    }

    async getAllChats(id: string, role: string) {
        return await this.textChat.getAllChat(id, role)
    }
    
    async addText(payload: any) {
        return await this.textChat.addText(payload)
    }
}