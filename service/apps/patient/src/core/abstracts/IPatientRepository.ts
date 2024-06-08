import { Patient, Payload, Query } from "../entity";

export abstract class IPatientRepository {
    abstract get(payload: any) : Promise<Patient>

    abstract getAll() : Promise<Patient[]>

    abstract create(data: object) : Promise<Patient>
    
    abstract delete() : Promise<any>
    
    abstract update(filter: Query, payload: Payload) : Promise<Patient>
}