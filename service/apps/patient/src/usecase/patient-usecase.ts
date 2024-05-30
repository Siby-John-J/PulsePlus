import { Injectable } from "@nestjs/common";
import { IPatientRepository } from "../core";

@Injectable()
export class PatientUsecase {
    constructor(private patient: IPatientRepository) {}

    async getAllPatients() {
        return await this.patient.getAll() 
    }

    async getPatient(payload: any) {
        const data = await this.patient.get(payload)
        console.log(data);
        
    }

    async createPatient(data: object) {
        return this.patient.create(data)
    }

    async deletePatient() {
        return await this.patient.delete()
    }

    async updatePatient() {
        
    }
}