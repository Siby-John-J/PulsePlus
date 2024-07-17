import { AuthEntity, DoctorCreateEntity, DoctorEntity } from "../entity";

export abstract class IDoctor {
    abstract createDoctor(credientals: DoctorCreateEntity): Promise<DoctorCreateEntity>

    abstract blockDoctor(id: string): Promise<DoctorEntity>

    abstract getDoctor(credientals: AuthEntity): Promise<DoctorEntity>
}