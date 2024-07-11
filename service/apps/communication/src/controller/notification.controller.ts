import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { NotificationService } from '../usecase';
import { ISocket, NotificationEntity } from '../core';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('notification')
export class NotificationController {
  constructor(
    private readonly notification: NotificationService,
    private readonly socket: ISocket
  ) {}
  
  @MessagePattern('notification:create')
  async createAppoinetment(@Payload() data: NotificationEntity) {
    try {
      // await this.notification.createNotification(data)
      // const response = await this.notification.getNotification(data.senderId)
      
      this.socket.emitMessage(data.senderId, 'notification:update')
      // socket io 

    } catch (error) {
      
    }
  }

  @Post('create')
  create(@Body() body: NotificationEntity) {
    try {
      return this.notification.createNotification(body)
    } catch (error) {
      return error
    }
  }

  @Get('get')
  async getHello(@Query() data: {id: string}) {
    const { id } = data

    try {
      return await this.notification.getNotification(id);
    } catch (error) {
      
    }
  }
}
