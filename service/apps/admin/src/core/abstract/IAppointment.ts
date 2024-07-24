import { AppoinetmentEnitity, RecordsEntity } from "../entity";

export abstract class IAppointment {
    abstract createAppoinetment(payload: AppoinetmentEnitity): Promise<object>

    abstract acceptAppointment(id: string, payload: object): Promise<object>

    abstract addRecords(id: string, payload: RecordsEntity): Promise<object>

    abstract getAppoinetment(): Promise<AppoinetmentEnitity[]>

    abstract getOneAppointment(_id: string): Promise<AppoinetmentEnitity>

    abstract changeStatus(status: string, payload: object): Promise<AppoinetmentEnitity>
}