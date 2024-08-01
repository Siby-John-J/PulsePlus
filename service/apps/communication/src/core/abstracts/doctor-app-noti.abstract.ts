import { DoctorNotification } from "../entity";

export abstract class IAppointDoctorNotification {
    abstract create(data: DoctorNotification): Promise<DoctorNotification>

    abstract get(id: string): Promise<DoctorNotification[]>

    abstract delete(id: string): Promise<DoctorNotification>
}