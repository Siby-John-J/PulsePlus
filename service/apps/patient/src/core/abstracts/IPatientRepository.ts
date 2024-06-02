import { Patient } from "../entity";

export abstract class IPatientRepository {
    abstract get(payload: any) : Promise<Patient>

    abstract getAll() : Promise<Patient[]>

    abstract create(data: object) : Promise<Patient>
    
    abstract delete() : Promise<any>
    
    abstract update(filter: object, payload: object) : Promise<Patient>
}