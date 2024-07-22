import { NotificationEntity, AppointmentNotificationEntity } from "../entity";

export abstract class INotification {
    abstract createNotification(data: NotificationEntity | AppointmentNotificationEntity): 
        Promise<NotificationEntity | AppointmentNotificationEntity>

    abstract deleteNotification()

    abstract getNotification(id: string): 
        Promise<NotificationEntity[] | AppointmentNotificationEntity[]>

    // abstract addNotification(id: string): Promise<NotificationEntity>
}