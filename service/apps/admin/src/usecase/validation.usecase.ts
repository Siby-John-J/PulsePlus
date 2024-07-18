import { Injectable } from '@nestjs/common';
import { ValidationEntity } from '../core';
import { IValidation } from '../core/abstract/IValidation';

@Injectable()
export class ValidationUsecase {
  constructor(private app: IValidation) {}

  async create(appoinetment: ValidationEntity): Promise<object> {
    return await this.app.createValidation(appoinetment)
  }

  async get(): Promise<ValidationEntity[]> {
    return await this.app.getValidation()
  }

  async changeValidation(status: string, payload: object): Promise<any> {
    return await this.app.changeValidation(status, payload)
  }
}
