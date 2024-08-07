import { Injectable } from '@nestjs/common';
import { DoctorNotification, IAppointDoctorNotification } from '../core';

@Injectable()
export class AppointmentDoctorNotificationService {
  constructor(private notification: IAppointDoctorNotification) {}
    
    async createDoctorNotification(data: DoctorNotification) {
        return await this.notification.create(data)
    }

    async getDoctorNotification(id: string) {
        return await this.notification.get(id)
        // return await this.notification.getNotification(id)
    }

    async getOneDoctorNotification(id: string, param: string) {
        return await this.notification.getOne(id, param)
    }

    async removeDoctorNotification(id: string) {
        return await this.notification.delete(id)
        // return await this.notification.getNotification(id)
    }
}
