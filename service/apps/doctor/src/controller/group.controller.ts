import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { AppoinetmentServiceUsecase } from "../usecase/appointment.service";
import { AppoinetmentEnitity } from "../core";
import { GroupServiceUsecase } from "../usecase";

@Controller('groups')
export class GroupController {
    constructor(private groupUsecase: GroupServiceUsecase ) {}

    @Get()
    async getAll() {
        return await this.groupUsecase.getAll()
    }

    @Get(':id')
    async getOne(@Param() data: { id: string }) {
        // console.log(id);

        return await this.groupUsecase.get(data.id)
    }
    
    @Post()
    async create(@Body() data: any) {
        return await this.groupUsecase.create(data)
    }

    @Delete(':id')
    async remove(@Param() id: string ) {
        return await this.groupUsecase.remove(id)
    }

    @Put(':id/ban')
    async ban(@Param() id: string ) {
        return await this.groupUsecase.ban(id)
    }
}