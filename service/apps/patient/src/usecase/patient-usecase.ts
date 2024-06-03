import { Injectable } from "@nestjs/common";
import { IPatientRepository, UpdateEntity } from "../core";

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

    async updatePatient(data: UpdateEntity) {
        const { name, password, ...rest } = data        
        return await this.patient.update({ name, password }, rest)
    }
}