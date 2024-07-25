import { Injectable } from '@nestjs/common';
import { INotification, NotificationEntity } from '../core';

@Injectable()
export class NotificationService {
  constructor(private notification: INotification) {}

  async createNotification(data: NotificationEntity) {
    return await this.notification.createNotification(data)
  }

  async getNotification(id: string) {
    return await this.notification.getNotification(id)
  }

  async getByRecords(senderId: string) {
    return await this.notification.getBySenderId(senderId)
  }
}
