import { InjectModel } from "@nestjs/mongoose";
import { IPatientRepository } from "../../core";
import { Model } from "mongoose";
import { Patient } from "../../core";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MongoRepository extends IPatientRepository {
    constructor(@InjectModel(Patient.name) readonly patientschema: Model<Patient>) {
        super()
    }

    async create() : Promise<Patient> {
        return await this.patientschema.create({})
    }

    async delete(): Promise<any> {
        return await this.patientschema.deleteOne({})
    }

    async get(): Promise<Patient> {
        return await this.patientschema.findOne({})
    }

    async getAll(): Promise<Patient[]> {
        return await this.patientschema.find({})
    }

    async update(): Promise<Patient> {
        return await this.patientschema.findOneAndUpdate({})
    }
}