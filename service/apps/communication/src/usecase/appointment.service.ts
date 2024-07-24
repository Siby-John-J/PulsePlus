import { Injectable } from '@nestjs/common';
import { AppointmentNotificationEntity, INotification } from '../core';

@Injectable()
export class AppointmentNotificationService {
  constructor(private notification: INotification) {}
    
    async save(data: AppointmentNotificationEntity) {
        return await this.notification.createNotification(data)
    }

    async publishToGroup(id: string) {
        // return await this.notification.getNotification(id)
    }

    async publishToDepartment(id: string) {
        // return await this.notification.getNotification(id)
    }
}
