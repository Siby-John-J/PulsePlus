import { Injectable } from '@nestjs/common';
import { IAppointment, AppoinetmentEnitity, RecordsEntity } from '../core';

@Injectable()
export class AppoinetmentUsecase {
  constructor(private app: IAppointment) {}

  async create(appoinetment: AppoinetmentEnitity): Promise<object> {
    const date = new Date()

    return await this.app.createAppoinetment({
      ...appoinetment,
      created: date
    })
  }

  async addItems(payload: object) {
    return await this.app.addItems(payload)
  }

  async get(): Promise<AppoinetmentEnitity[]> {
    return await this.app.getAppoinetment()
  }

  async getOne(_id: string): Promise<AppoinetmentEnitity> {
    return await this.app.getOneAppointment(_id)
  }

  async statusChange(status: string, payload: object): Promise<any> {
    return await this.app.changeStatus(status, payload)
  }

  async accept(id: string, payload: object) {
    return await this.app.acceptAppointment(id, payload)
  }

  async addRecords(id: string, payload: RecordsEntity) {
    return await this.app.addRecords(id, payload)
  }

  async getRecords(id: string, type: string) {
    return await this.app.getByRecords(id, type)
  }

  async removeRecords(id: string) {
    return await this.app.removeRecord(id)
  }

  async addDoctor(data: { id: string, appointId: string }) {
    const { id,  appointId } = data
    return await this.app.addDoctor(id, appointId)
  }

  async findForPatients(id: string) {
    return await this.app.findForPatients(id)
  }

  async findForDoctor(id: string) {
    return await this.app.getAppointsForDoctor(id)
  }

  async getDoctorId(id: string) {
    return await this.app.getDoctorId(id)
  }
}
