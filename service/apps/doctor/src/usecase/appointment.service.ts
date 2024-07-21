import { Injectable } from '@nestjs/common';
import { AppoinetmentEnitity, IAppointment } from '../core';

@Injectable()
export class AppoinetmentServiceUsecase {
  constructor(private appointment: IAppointment) {}

  async create(payload: AppoinetmentEnitity) {
    return await this.appointment.createAppointment(payload)
  }

  async get(id: string) {
    return await this.appointment.getAppointment(id)
  }

  async change(id: string) {
    return await this.appointment.acceptAppointment(id)
  }

  async remove(id: string) {
    return await this.appointment.deleteAppointment(id)
  }
}
