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

    async deleteNotification(id: string): Promise<any> {
        return await this.notification.deleteOne({ _id: id })
    }

    async getNotification(id: string): Promise<NotificationEntity[]> {
        const response = await this.notification.find({ senderId: id })
        return response
    }
    async getBySenderId(senderId: string) {
        return await Promise.resolve('hi')
    }
}