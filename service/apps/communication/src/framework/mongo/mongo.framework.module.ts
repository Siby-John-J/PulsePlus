import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { NotificationRepository } from "./repository/notification-rep.service";
import { IAppoNotification, IAppointDoctorNotification, INotification } from "../../core";
import { Notification, NotificationSchema } from "./models/notification.schema";
import { AppointmentNotificationRepository } from "./repository/appo-noti-rep.service";
import { AppointmentNotification, AppointmentNotificationSchema } from "./models/appo-notification.schema";
import { AppointDoctorNotification, AppointDoctorNotificationSchema } from "./models/app-doctor-noti.schema";
import { AppointDoctorNotificationRepository } from "./repository/app-doctor.noti.service";

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
            },
            {
                name: AppointDoctorNotification.name,
                schema: AppointDoctorNotificationSchema
            }
        ])
    ],
    providers: [
        {
            provide: INotification,
            useClass: NotificationRepository
        },
        {
            provide: IAppoNotification,
            useClass: AppointmentNotificationRepository
        },
        {
            provide: IAppointDoctorNotification,
            useClass: AppointDoctorNotificationRepository
        }
    ],
    exports: [INotification, IAppoNotification, IAppointDoctorNotification]
})
export class MongoFrameWorkModule {}