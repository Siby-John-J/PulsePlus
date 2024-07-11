import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { NotificationRepository } from "./repository/notification-rep.service";
import { INotification } from "../../core";
import { Notification, NotificationSchema } from "./models/notification.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Notification.name,
                schema: NotificationSchema
            }
        ])
    ],
    providers: [
        {
            provide: INotification,
            useClass: NotificationRepository
        }
    ],
    exports: [INotification]
})
export class MongoFrameWorkModule {}