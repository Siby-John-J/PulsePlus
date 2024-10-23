import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { GroupMessageEntity, GroupPollEntity } from "../core";
import { GroupMessageServiceUsecase } from "../usecase";
import { GroupPollServiceUsecase } from "../usecase/group-poll.service";
import { CombineMessageService } from "../usecase/combine-message.service";

@Controller('groupmessage')
export class GroupMessageController {
    constructor(
        private messageUsecase: GroupMessageServiceUsecase,
        private groupPollUsecase: GroupPollServiceUsecase,
        private combine: CombineMessageService 
    ) {}

    @Get(':id')
    async get(@Param() data: { id: string }) {
        // console.log()
        
        const response = await this.messageUsecase.get(data.id)
        console.log(response)
        
        return this.combine.combineByTime(response)
    }
    
    @Post()
    async createMessage(@Body() data: GroupMessageEntity | GroupPollEntity) {
        if(data.type === 'poll') {
            return await this.groupPollUsecase.create(data)
        }

        if(data.type === 'text') {
            return await this.messageUsecase.create(data)
        }
    }

    @Delete(':id')
    async deleteMessage(@Param() id: string ) {
        return this.messageUsecase.remove(id)
    }

    @Put(':id/poll')
    async updatePoll(@Param() id: { id: string }, @Body() data: any) {
        return await this.messageUsecase.update(id.id, data)
    }
}