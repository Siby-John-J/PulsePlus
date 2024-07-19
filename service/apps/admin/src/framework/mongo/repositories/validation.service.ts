import { InjectModel } from "@nestjs/mongoose";
import {  ValidationEntity } from "apps/admin/src/core";
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
      const res = await this.patientschema.findOneAndUpdate(payload, {status}, {
          returnDocument: 'after',
      })
      
      return res
    }

    async createValidation(payload: ValidationEntity): Promise<object> {
        return await this.patientschema.create(payload)
    }

    async getValidation(): Promise<ValidationEntity[]> {
      return await this.patientschema.find()
    }
}