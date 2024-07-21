import { AppoinetmentEnitity } from "../entity";

export abstract class IAppointment {
    abstract createAppointment(payload: AppoinetmentEnitity): Promise<AppoinetmentEnitity>

    abstract deleteAppointment(id: string): void

    abstract getAppointment(id: string): Promise<AppoinetmentEnitity[]>

    abstract acceptAppointment(id: string): Promise<AppoinetmentEnitity>
}