import { Injectable } from '@nestjs/common';
import { ValidationEntity } from '../core';
import { IValidation } from '../core/abstract/IValidation';

@Injectable()
export class AppointmenPaymentnUsecase {
  constructor(private app: IValidation) {}

  async create(payload: ValidationEntity): Promise<object> {
    const data = {...payload, created: Date(), status: 'pending'}
    
    return await this.app.createValidation(data)
  }

  async get(): Promise<ValidationEntity[]> {
    return await this.app.getValidation()
  }

  async changeValidation(status: string, payload: object): Promise<any> {
    return await this.app.changeValidation(status, payload)
  }
}
