import { InjectModel } from "@nestjs/mongoose";
import { AppoinetmentEnitity, IAppointment } from "apps/admin/src/core";
import { Appoinetment } from "../models/appoinetment.schema";
import { Model } from "mongoose";

export class AppoinetmentRepository extends IAppointment {
    constructor(
        @InjectModel(Appoinetment.name) readonly patientschema: Model<AppoinetmentEnitity>,
      ) {
        super();
    }

    async createAppoinetment(payload: AppoinetmentEnitity): Promise<object> {
        const res =  await this.patientschema.create(payload)
        if(res) {
            return { response: true }
        } else {
            return { response: false }
        }
    }

    async getAppoinetment(): Promise<AppoinetmentEnitity[]> {
        return await this.patientschema.find()
    }

    async changeStatus(status: string, payload: object): Promise<AppoinetmentEnitity> {
        return await this.patientschema.findOneAndUpdate(payload, {status: status}, {
            returnDocument: 'after',
        })

    }
}