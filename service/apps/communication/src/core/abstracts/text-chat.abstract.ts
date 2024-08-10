import { TextChatEntity } from "../entity";

export abstract class ITextChat {
    abstract addToChat(data: TextChatEntity): Promise<TextChatEntity>

    abstract removeFromChat(receverId: string, senderId: string): Promise<TextChatEntity>

    abstract getAllChat(id: string, role: string): Promise<TextChatEntity[]>

    abstract addText(payload: any): Promise<TextChatEntity>
}