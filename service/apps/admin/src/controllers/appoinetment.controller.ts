import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { AppoinetmentUsecase } from '../usecase';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppoinetmentEnitity, ICommunicationPublisher, RecordsEntity } from '../core';

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

  @Get('get_by_records')
  async getByRecords(
    @Query() data: { id: string, type: string }
  ) {
    const { id, type } = data
    
    const response: any = await this.appointment.getRecords(id, type)

    const result = await this.commPublisher.publish('appointment:get', JSON.stringify(response))
    
    return result
    
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
        content: 'your appointmentment is rejected by admin',
        type: 'appointment'
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

  @Delete('remove_record')
  async removeFromAppointment(@Query() data: { id: string }) {
    const res = await this.appointment.removeRecords(data.id)

    if(res) {
      return res
    } else {
      return { error: 'true' }
    }
  }

  @Put('add_doctor')
  async addDoctor(@Body() body: any) {
    const check = await this.appointment.getOne(body.appointId)
    const { accept, ...rest } = check
    
    if(accept) {
      return { error: 'already accepted' }
    }
    
    return await this.appointment.addDoctor(body)
    // this.commPublisher.publish('notification:create', body)
    
  }

  @Delete('remove_doctor')
  async removeDoctor(@Query() body: any) {
    console.log(body)

    return { error: 'true' }
    // this.commPublisher.publish('notification:create', body)
    
  }

  // @MessagePattern('appoinetment:create')
  // createAppoinetment(@Payload() data: AppoinetmentEnitity) {
  //   return this.appoinetment.create(data)
  // }
}