import { Controller, Get, Post, Put, Query } from '@nestjs/common';
import { ICommunicationPublisher, ValidationEntity } from '../core';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ValidationUsecase } from '../usecase';

@Controller('validation')
export class ValidationController {
    constructor(
        private validationUsecase: ValidationUsecase
    ) {}

    @MessagePattern('doctor:create-request')
    async createRegisterRequest(@Payload() data: any) {
        return await this.validationUsecase.create(data)
    }

    @MessagePattern('doctor:get-request')
    async getRegisterRequest(@Payload() data: any) {
        return await this.validationUsecase.get()
    }

    @MessagePattern('doctor:change-request')
    async changeRegisterRequest(@Payload() data: ValidationEntity) {
        const { status, ...rest } = data
        return await this.validationUsecase.changeValidation(status, rest)
    }
}
