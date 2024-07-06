import { AppoinetmentEnitity } from "../entity";

export abstract class IAppointment {
    abstract createAppoinetment(payload: any): Promise<AppoinetmentEnitity>

    abstract getAppoinetment(): Promise<AppoinetmentEnitity[]>

    abstract changeStatus(status: string, payload: object): Promise<AppoinetmentEnitity>
}