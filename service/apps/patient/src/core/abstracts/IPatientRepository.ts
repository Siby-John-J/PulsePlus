import { Patient } from "../entity";

export abstract class IPatientRepository {
    abstract get() : Promise<Patient>

    abstract getAll() : any

    abstract create() : any
    
    abstract delete() : any
    
    abstract update() : any
}