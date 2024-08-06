import { Payment } from "../entity";

export abstract class IPayment {
    abstract createPayment(item: object, id: string): Promise<any>

    abstract getPayment(): Promise<Payment>
}