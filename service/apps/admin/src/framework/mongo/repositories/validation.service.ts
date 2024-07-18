import { InjectModel } from "@nestjs/mongoose";
import { AppoinetmentEnitity, IAppointment, ValidationEntity } from "apps/admin/src/core";
import { Appoinetment } from "../models/appoinetment.schema";
import { Model } from "mongoose";
import { Validation } from "../models/validation.schema";
import { IValidation } from "apps/admin/src/core/abstract/IValidation";

export class ValidationtRepository extends IValidation {
    constructor(
        @InjectModel(Validation.name) readonly patientschema: Model<ValidationEntity>,
      ) {
        super();
    }

    async changeValidation(status: string, payload: object): Promise<ValidationEntity> {
        return await this.patientschema.findOneAndUpdate({status}, payload)
    }

    async createValidation(payload: ValidationEntity): Promise<object> {
        return await this.patientschema.create(payload)
    }

    async getValidation(): Promise<ValidationEntity[]> {
      return await this.patientschema.find()
    }
}