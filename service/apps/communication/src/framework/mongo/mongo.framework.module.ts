import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { NotificationRepository } from "./repository/notification-rep.service";
import { INotification } from "../../core";
import { Notification, NotificationSchema } from "./models/notification.schema";
import { AppointmentNotificationRepository } from "./repository/appo-noti-rep.service";
import { AppointmentNotification, AppointmentNotificationSchema } from "./models/appo-notification.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Notification.name,
                schema: NotificationSchema
            },
            {
                name: AppointmentNotification.name,
                schema: AppointmentNotificationSchema
            }
        ])
    ],
    providers: [
        {
            provide: INotification,
            useClass: NotificationRepository
        },
        {
            provide: INotification,
            useClass: AppointmentNotificationRepository
        }
    ],
    exports: [INotification, INotification]
})
export class MongoFrameWorkModule {}