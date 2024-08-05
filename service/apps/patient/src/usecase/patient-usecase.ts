import { Injectable } from "@nestjs/common";
import { IPatientRepository, IAdminPublisher, Payload, Query } from "../core";

@Injectable()
export class PatientUsecase {
    constructor(
        private patient: IPatientRepository,
        private publisher: IAdminPublisher
    ) {}

    async getAllPatients() {
        return await this.patient.getAll()
    }

    async getPatient(payload: any) {
        return await this.patient.get(payload)
    }

    async getPatientById(id: string) {
        return await this.patient.getById(id)
    }

    async createPatient(data: object) {
        return this.patient.create(data)
    }

    async deletePatient() {
        return await this.patient.delete()
    }

    async updatePatient(target: Query, payload: Payload) {  
        const res = await this.patient.update(target, payload)
        const { refreshTokens, ...rest } = res
        
        return rest
    }
    
    async createAppoinetment(payload: any) {
        this.publisher.publish('appoinetment:create', payload)
    }
}