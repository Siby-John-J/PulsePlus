import { Injectable } from "@nestjs/common";
import { IPatientRepository, Payload, Query } from "../core";

@Injectable()
export class PatientUsecase {
    constructor(private patient: IPatientRepository) {}

    async getAllPatients() {
        return await this.patient.getAll()
    }

    async getPatient(payload: any) {
        return await this.patient.get(payload)
    }

    async createPatient(data: object) {
        return this.patient.create(data)
    }

    async deletePatient() {
        return await this.patient.delete()
    }

    async updatePatient(target: Query, payload: Payload) {
        const res = await this.patient.update(target, payload)
        const { refreshTokens, ...rest } = res // res._doc
        
        return rest
    }
}