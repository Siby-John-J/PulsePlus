import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppoinetmentUsecase } from '../usecase';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppoinetmentEnitity } from '../core';

@Controller('appointment')
export class AppoinetmentController {
  constructor(private readonly appoinetment: AppoinetmentUsecase) {}

  @Post('create')
  createAppoinetment(@Body() body: AppoinetmentEnitity) {
    return this.appoinetment.create(body);
  }

  @Get('get')
  getAppoinetment() {
    return this.appoinetment.get()
  }

  @MessagePattern('appoinetment')
  getAppoinetmentRequest(@Payload() data: any) {
    console.log(data)
  }
}
