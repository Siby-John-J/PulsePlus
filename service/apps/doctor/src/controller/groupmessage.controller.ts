import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { AppoinetmentServiceUsecase } from "../usecase/appointment.service";
import { AppoinetmentEnitity, GroupMessageEntity } from "../core";
import { GroupMessageServiceUsecase } from "../usecase";

@Controller('groupmessage')
export class GroupMessageController {
    constructor(private messageUsecase:  GroupMessageServiceUsecase) {}

    @Get()
    async getAll() {
        return await this.messageUsecase.getAll()
    }
    
    @Post()
    async createAppointment(@Body() data: GroupMessageEntity) {
        return this.messageUsecase.create(data)
    }

    @Delete(':id')
    async deleteAppointment(@Param() id: string ) {
        return this.messageUsecase.remove(id)
    }
}