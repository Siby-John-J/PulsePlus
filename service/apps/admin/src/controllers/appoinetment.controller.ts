import { Body, Controller, Get, Post, Put, Query } from '@nestjs/common';
import { AppoinetmentUsecase } from '../usecase';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppoinetmentEnitity } from '../core';

@Controller('appointment')
export class AppoinetmentController {
  constructor(private readonly appoinetment: AppoinetmentUsecase) {}

  // @Post('create')
  // createAppoinetment(@Body() body: AppoinetmentEnitity) {
  //   return this.appoinetment.create(body);
  // }

  @Get('get')
  getAppoinetment() {
    return this.appoinetment.get()
  }

  @Put('change_status')
  changeAppoinetment(@Query() data: { status: string }) {
    return this.appoinetment.statusChange(data.status)
  }

  @MessagePattern('appoinetment:create')
  createAppoinetment(@Payload() data: AppoinetmentEnitity) {
    return this.appoinetment.create(data)
  }
}
