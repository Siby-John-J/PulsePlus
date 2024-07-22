import { Module } from "@nestjs/common";
import { NotificationService } from "./notification.service";
import { MongoServiceModule } from "../service/mongo-service.module";
import { AppointmentNotificationService } from "./appointment.service";


@Module({
    imports: [MongoServiceModule],
    providers: [NotificationService, AppointmentNotificationService],
    exports: [NotificationService, AppointmentNotificationService]
})
export class UseCaseModule {}