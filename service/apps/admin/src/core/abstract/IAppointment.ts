import { AppoinetmentEnitity } from "../entity";

export abstract class IAppointment {
    abstract createAppoinetment(payload: any): Promise<AppoinetmentEnitity>

    abstract getAppoinetment(): Promise<AppoinetmentEnitity[]>
}