import { AppointmentPaymentEntity } from "../entity";

export abstract class IAppointmentPayment {
    abstract create(payload: AppointmentPaymentEntity): Promise<AppointmentPaymentEntity>

    abstract getForPatient(id: string): Promise<AppointmentPaymentEntity[]>

    abstract getAll(): Promise<AppointmentPaymentEntity[]>
}