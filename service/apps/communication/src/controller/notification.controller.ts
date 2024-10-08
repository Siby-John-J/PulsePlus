import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
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
      await this.notification.createNotification(data)
      const response = await this.notification.getNotification(data.senderId)
      
      this.socket.emitMessage(data.senderId, 'notification:update')
      // socket io 

    } catch (error) {
      
    }
  }

  @MessagePattern('notification:records')
  async getFromRecords(@Payload() data: any) {
    try {
      const result = await this.notification.getNotification(data)
      
      const parsed = JSON.parse(data)
      
      return { result, data: parsed }
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
    const res = await this.notification.getNotification(data.id);
    return res
  }

  @Delete('remove')
  async deleteNotification(@Query() data: {id: string}) {
    return await this.notification.removeNotification(data.id)
  }
}
