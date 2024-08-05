import { Injectable } from '@nestjs/common';
import { AppointmentPaymentEntity } from '../core';
import { IAppointmentPayment } from '../core/abstract/IAppointmentPayment';

@Injectable()
export class AppointmenPaymentUsecase {
  constructor(private app: IAppointmentPayment) {}

  async createOne(payload: AppointmentPaymentEntity) {
    return await this.app.create(payload)
  }

  async getAll() {
    return await this.app.getAll()
  }

  async getForPatient(id: string) {
    return await this.app.getForPatient(id)
  }
}
