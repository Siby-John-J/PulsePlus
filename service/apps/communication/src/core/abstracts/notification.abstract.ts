import { NotificationEntity } from "../entity";

export abstract class INotification {
    abstract createNotification(data: NotificationEntity): Promise<NotificationEntity>

    abstract deleteNotification()

    abstract getNotification(id: string): Promise<NotificationEntity[]>

    // abstract addNotification(id: string): Promise<NotificationEntity>
}