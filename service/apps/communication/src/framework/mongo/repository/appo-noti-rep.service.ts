import { InjectModel } from "@nestjs/mongoose";
import { AppointmentNotification } from "../models/appo-notification.schema";
import { Model } from "mongoose";
import { INotification, AppointmentNotificationEntity, IAppoNotification } from "../../../core"

export class AppointmentNotificationRepository extends IAppoNotification {
    constructor(
        @InjectModel(AppointmentNotification.name) readonly notification: Model<AppointmentNotificationEntity>,
      ) {
        super();
    }

    async createNotification(data: AppointmentNotificationEntity) {
        return await this.notification.create(data)
    }

    deleteNotification() {
        
    }

    async getNotification(id: string): Promise<AppointmentNotificationEntity[]> {
        const parsed = JSON.parse(id)
        
        return await this.notification.find({ appointmentId: parsed})
    }

    async getBySenderId<T>(senderId: string): Promise<T | T[]> {
        return await this.notification.find({ appointmentId: senderId })
    }
}