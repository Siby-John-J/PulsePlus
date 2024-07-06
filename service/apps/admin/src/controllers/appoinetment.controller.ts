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
  async changeAppoinetment(
    @Query() data: { status: string },
    @Body() body: any
  ) {
    
    const res = await this.appoinetment.statusChange(data.status, body)
    console.log(res)
    
    return res
  }

  @MessagePattern('appoinetment:create')
  createAppoinetment(@Payload() data: AppoinetmentEnitity) {
    return this.appoinetment.create(data)
  }
}
