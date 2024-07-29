import { Module } from "@nestjs/common";
import { NotificationService } from "./notification.service";
import { MongoServiceModule } from "../service/mongo-service.module";
import { AppointmentNotificationService } from "./appointment.service";
import { AppointmentDoctorNotificationService } from "./doctor-app-noti.service";

@Module({
    imports: [MongoServiceModule],
    providers: [
        NotificationService, 
        AppointmentNotificationService, 
        AppointmentDoctorNotificationService
    ],
    exports: [
        NotificationService, 
        AppointmentNotificationService, 
        AppointmentDoctorNotificationService
    ]
})
export class UseCaseModule {}