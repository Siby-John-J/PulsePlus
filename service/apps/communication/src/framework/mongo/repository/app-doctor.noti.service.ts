import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IAppointDoctorNotification, DoctorNotification } from "../../../core"
import { AppointDoctorNotification } from "../models/app-doctor-noti.schema";

export class AppointDoctorNotificationRepository extends IAppointDoctorNotification {
    constructor(
        @InjectModel(AppointDoctorNotification.name) readonly notification: Model<DoctorNotification>,
      ) {
        super();
    }

    async create(data: DoctorNotification): Promise<DoctorNotification> {
        return await this.notification.create(data)
    }

    async delete(id: string): Promise<DoctorNotification> {
        return await this.notification.findOneAndDelete({_id: id})
    }

    async get(id: string): Promise<DoctorNotification[]> {
        return await this.notification.find({senderId: id})
    }
}