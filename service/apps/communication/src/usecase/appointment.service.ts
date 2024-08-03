import { Injectable } from '@nestjs/common';
import { AppointmentNotificationEntity, IAppoNotification } from '../core';

@Injectable()
export class AppointmentNotificationService {
  constructor(private notification: IAppoNotification) {}
    
    async save(data: AppointmentNotificationEntity) {
        return await this.notification.createNotification(data)
    }

    async publishToGroup(id: string) {
        // return await this.notification.getNotification(id)
    }

    async publishToDepartment(id: string) {
        // return await this.notification.getNotification(id)
    }

    async getForDoctor(id: string) {
        return await this.notification.getNotification(id)
    }
}
