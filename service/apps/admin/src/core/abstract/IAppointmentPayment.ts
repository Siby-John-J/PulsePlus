import { AppointmentPaymentEntity } from "../entity";

export abstract class IAppointmentPayment {
    abstract create(payload: AppointmentPaymentEntity): Promise<AppointmentPaymentEntity>

    abstract getForPatient(id: string): Promise<AppointmentPaymentEntity[]>

    abstract getAll(): Promise<AppointmentPaymentEntity[]>

    abstract updatePayment(data: any, id: string): Promise<AppointmentPaymentEntity>

    abstract deletePayment(id: string): Promise<any>

    abstract getOne(id: string): Promise<AppointmentPaymentEntity>
}