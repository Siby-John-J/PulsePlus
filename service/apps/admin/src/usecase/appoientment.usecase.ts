import { Injectable } from '@nestjs/common';
import { IAppointment, AppoinetmentEnitity } from '../core';

@Injectable()
export class AppoinetmentUsecase {
  constructor(private app: IAppointment) {}

  async create(appoinetment: AppoinetmentEnitity): Promise<AppoinetmentEnitity> {
    return await this.app.createAppoinetment(appoinetment)
  }

  async get(): Promise<AppoinetmentEnitity[]> {
    return await this.app.getAppoinetment()
  }

  async statusChange(status: string): Promise<any> {
    return await this.app.changeStatus(status)
  }
}
