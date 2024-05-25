import { Patient } from "../entity";

export abstract class IPatientRepository {
    abstract get() : Promise<Patient>

    abstract getAll() : Promise<Patient[]>

    abstract create() : Promise<Patient>
    
    abstract delete() : Promise<any>
    
    abstract update() : Promise<Patient>
}