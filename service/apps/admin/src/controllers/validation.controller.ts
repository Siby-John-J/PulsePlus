import { Body, Controller, Get, Post, Put, Query } from '@nestjs/common';
import { ICommunicationPublisher, ValidationEntity } from '../core';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ValidationUsecase } from '../usecase';
import { IDoctorPublisher } from '../core';

@Controller('validation')
export class ValidationController {
    constructor(
        private validationUsecase: ValidationUsecase,
        private doctorPublisher: IDoctorPublisher
    ) {}

    @MessagePattern('doctor:create-request')
    async createRegisterRequest(@Payload() data: any) {
        return await this.validationUsecase.create(data)
    }

    @Get('get')
    async getRegisterRequest() {
        return await this.validationUsecase.get()
    }

    @Put('change_status')
    async changeRegisterRequest(
        @Body() data: ValidationEntity & { type: string },
        @Query() stat: any
    ) { 
        const { type, status, ...rest } = data
        
        await this.doctorPublisher.publish('doctor:change_status', JSON.stringify({
            _id: rest.senderId,
            status: stat.status
        }))
        const response = await this.validationUsecase.changeValidation(stat.status, rest)
        
        return response
    }
}
