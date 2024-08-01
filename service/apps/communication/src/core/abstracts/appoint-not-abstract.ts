import { NotificationEntity, AppointmentNotificationEntity } from "../entity";

export abstract class IAppoNotification {
    abstract createNotification(data: AppointmentNotificationEntity): 
        Promise<AppointmentNotificationEntity>

    abstract deleteNotification()

    abstract getNotification(id: string): 
        Promise<AppointmentNotificationEntity[]>

    abstract getBySenderId(senderId: string): Promise<any> | Promise<any[]>
    // abstract addNotification(id: string): Promise<NotificationEntity>
}