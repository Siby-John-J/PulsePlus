import { Injectable } from '@nestjs/common';
import { INotification, NotificationEntity } from '../core';

@Injectable()
export class AppointmentNotificationService {
  constructor(private notification: INotification) {}
    
    async save(data: NotificationEntity) {
        console.log(data);
        
        
        return await this.notification.createNotification(data)
    }

    async publishToGroup(id: string) {
        // return await this.notification.getNotification(id)
    }

    async publishToDepartment(id: string) {
        // return await this.notification.getNotification(id)
    }
}
