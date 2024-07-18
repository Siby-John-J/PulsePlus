import { ValidationEntity } from "../entity";

export abstract class IValidation {
    abstract createValidation(payload: ValidationEntity): Promise<object>

    abstract getValidation(): Promise<ValidationEntity[]>

    abstract changeValidation(status: string, payload: object): Promise<ValidationEntity>
}