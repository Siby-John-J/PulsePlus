import { InjectModel } from "@nestjs/mongoose";
import { IAppointment, AppoinetmentEnitity } from "../../../core"
import { Appoinetment } from "../models/appointment.schema"
import { Model } from "mongoose";

export class AppoinetmentRepository extends IAppointment {
    constructor(
        @InjectModel(Appoinetment.name) readonly appointmentSchema: Model<AppoinetmentEnitity>,
      ) {
        super();
    }

    async createAppointment(payload: AppoinetmentEnitity): Promise<AppoinetmentEnitity> {
        return await this.appointmentSchema.create(payload)
    }

    async deleteAppointment(id: string): Promise<AppoinetmentEnitity> {
        return await this.appointmentSchema.findOneAndDelete({_id: id})
    }

    async getAppointment(id: string): Promise<AppoinetmentEnitity[]> {
        return await this.appointmentSchema.find({senderId: id})
    }

    async acceptAppointment(id: string): Promise<AppoinetmentEnitity> {
        return await this.appointmentSchema.findOneAndUpdate({senderId: id}, {status: 'accept'}, {
            returnDocument: "after"
        })
    }
}