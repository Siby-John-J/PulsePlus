import { InjectModel } from "@nestjs/mongoose";
import { AppointmentNotification } from "../models/appo-notification.schema";
import { Model } from "mongoose";
import { INotification, AppointmentNotificationEntity } from "../../../core"

export class AppointmentNotificationRepository extends INotification {
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
        console.log(id);
        
        const response =  await this.notification.find({senderId: id})
        console.log(response)
        
        return response
    }
}