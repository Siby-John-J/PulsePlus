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

    async createAppoinetment(payload: AppoinetmentEnitity): Promise<AppoinetmentEnitity> {
        return await this.patientschema.create(payload)
    }

    async getAppoinetment(): Promise<AppoinetmentEnitity[]> {
        return await this.patientschema.find()
    }
}