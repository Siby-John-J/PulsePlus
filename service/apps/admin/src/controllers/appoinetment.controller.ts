import { Body, Controller, Get, Post, Put, Query } from '@nestjs/common';
import { AppoinetmentUsecase } from '../usecase';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppoinetmentEnitity, ICommunicationPublisher, RecordsEntity } from '../core';
import { body } from 'express-validator';

@Controller('appointment')
export class AppointmentController {
  constructor(
    private readonly appointment: AppoinetmentUsecase,
    private readonly commPublisher: ICommunicationPublisher
  ) {}

  @Post('create')
  createAppoinetment(@Body() body: AppoinetmentEnitity) {
    return this.appointment.create(body);
  }

  @Get('get')
  getAppointment() {
    return this.appointment.get()
  }

  @Put('change_status')
  async changeAppointment(
    @Query() data: { status: string },
    @Body() body: any
  ) {
    const res = await this.appointment.statusChange(data.status, body)
    
    if(data.status === 'rejected') {
      this.commPublisher.publish('notification:create', {
        senderId: body.senderId,
        content: 'your appointmentment is rejected by admin'
      })
    }

    return res
  }

  @Post('records')
  async addRecords(
    @Query() data: { id: string },
    @Body() body: RecordsEntity
  ) {
    
    return await this.appointment.addRecords(data.id, body)
  }

  @Post('accept')
  async postAppointment(
    @Query() data: { id: string },
    @Body() body: any
  ) {
    const response: any = this.appointment.getOne(data.id)

    if(response._id === data.id) {
      this.appointment.accept(data.id, body)
    }
  }

  // @MessagePattern('appoinetment:create')
  // createAppoinetment(@Payload() data: AppoinetmentEnitity) {
  //   return this.appoinetment.create(data)
  // }
}
