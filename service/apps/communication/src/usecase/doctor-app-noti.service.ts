import { Injectable } from '@nestjs/common';
import { DoctorNotification, IAppointDoctorNotification } from '../core';

@Injectable()
export class AppointmentDoctorNotificationService {
  constructor(private notification: IAppointDoctorNotification) {}
    
    async createDoctorNotification(data: DoctorNotification) {
        return await this.notification.create(data)
    }

    async getDoctorNotification() {
        return await this.notification.get()
        // return await this.notification.getNotification(id)
    }

    async removeDoctorNotification(id: string) {
        return await this.notification.delete(id)
        // return await this.notification.getNotification(id)
    }
}
