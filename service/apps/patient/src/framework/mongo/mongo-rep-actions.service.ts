import { InjectModel } from "@nestjs/mongoose";
import { IPatientActions } from "../../core";
import { Model } from "mongoose";
import { Patient } from "../../core";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MongoActionRepository extends IPatientActions {
    constructor(@InjectModel(Patient.name) readonly patientschema: Model<Patient>) {
        super()
    }

    async saveToken(query: object, token: string) : Promise<boolean> {
        return await this.patientschema.findOneAndUpdate(query, {
            $push: {
                refreshTokens: token
            }
        })
    }

    async getToken(query: object) {
        return await this.patientschema.findOne(query, { refreshTokens: 1, _id: 0 })
    }

    async clearTokens(query: object) {
        return await this.patientschema.findOneAndUpdate(query, {
            refreshTokens: []
        })
    }
}