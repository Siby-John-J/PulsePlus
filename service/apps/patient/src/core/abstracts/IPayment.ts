import { Payment } from "../entity";

export abstract class IPayment {
    abstract createPayment(item: object[], id: string): Promise<string>

    abstract getPayment(): Promise<Payment>
}