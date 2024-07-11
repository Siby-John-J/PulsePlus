import { InjectModel } from "@nestjs/mongoose";
import { Notification } from "../models/notification.schema";
import { Model } from "mongoose";
import { INotification, NotificationEntity } from "../../../core"

export class NotificationRepository extends INotification {
    constructor(
        @InjectModel(Notification.name) readonly notification: Model<NotificationEntity>,
      ) {
        super();
    }

    async createNotification(data: NotificationEntity) {
        return await this.notification.create(data)
    }

    deleteNotification() {
        
    }

    async getNotification(id: string): Promise<NotificationEntity[]> {
        console.log(id);
        
        const response =  await this.notification.find({senderId: id})
        console.log(response)
        
        return response
    }
}