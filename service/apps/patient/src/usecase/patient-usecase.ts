import { Injectable } from "@nestjs/common";
import { IPatientRepository } from "../core";

@Injectable()
export class PatientUsecase {
    constructor(private patient: IPatientRepository) {}

    async getPatient() {
        const data = await this.patient.getAll()
        console.log(data);
        
    }

    createPatient() {
        return this.patient.create()
    }
}