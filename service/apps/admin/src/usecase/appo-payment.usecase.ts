import { Injectable } from '@nestjs/common';
import { AppointmentPaymentEntity } from '../core';
import { IAppointmentPayment } from '../core/abstract/IAppointmentPayment';

@Injectable()
export class AppointmenPaymentUsecase {
  constructor(private app: IAppointmentPayment) {}

  async createOne(payload: AppointmentPaymentEntity) {
    return await this.app.create(payload)
  }

  async getOne(id: string): Promise<AppointmentPaymentEntity> {
    return await this.app.getOne(id)
  }

  async getAll() {
    return await this.app.getAll()
  }

  async getForPatient(id: string) {
    return await this.app.getForPatient(id)
  }

  async updatePayment(id: string, data: any) {
    return await this.app.updatePayment(data, id)
  }

  async deletePayment(id: string) {
    return await this.app.deletePayment(id)
  }
}
