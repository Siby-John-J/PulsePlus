import { NotificationEntity, AppointmentNotificationEntity } from "../entity";

export abstract class INotification {
    abstract createNotification(data: NotificationEntity | AppointmentNotificationEntity): 
        Promise<NotificationEntity | AppointmentNotificationEntity>

    abstract deleteNotification(id: string): Promise<any>

    abstract getNotification(id: string): 
        Promise<NotificationEntity[]>

    abstract getBySenderId(senderId: string): Promise<any> | Promise<any[]>
    // abstract addNotification(id: string): Promise<NotificationEntity>
}