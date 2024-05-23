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

    async create() {
        return await this.patientschema.create({
            name: 'sus',
            age: 12,
            email: 'sus',
            family: null,
            password: 'dicksmemes'
        })
    }

    delete() {
        
    }

    async get(): Promise<Patient> {
        return await this.patientschema.findOne({name: 'sus'})
    }

    async getAll(): Promise<Patient[]> {
        return await this.patientschema.find({})
    }

    update() {
        
    }
}