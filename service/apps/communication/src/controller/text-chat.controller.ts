import { Body, Controller, Delete, Get, Post, Query, Put } from "@nestjs/common";
import { TextChatServiceUsecase } from "../usecase";
import { ISocket } from "../core";

@Controller('text_chat')
export class TextChatController {
    constructor(
        private textChatUsecase: TextChatServiceUsecase,
        private socket: ISocket
    ) {}

    @Post('add')
    async addToChat(@Body() data: any) {
        return await this.textChatUsecase.addChat(data)
    }

    @Delete('remove')
    async removeFromChat(@Query() data: { receverId: string, senderId: string }) {
        const { receverId, senderId } = data

        return await this.textChatUsecase.removeChat(receverId, senderId)
    }

    @Get('listData')
    async getAllData(@Query() data: { id: string, role: string }) {
        const { id, role } = data

        return await this.textChatUsecase.getAllChats(id, role)
    }

    @Put('addText')
    async addText(@Body() data: any) {
        return await this.textChatUsecase.addText(data)
    }
}