import { Injectable } from '@nestjs/common';
import { AuthEntity, DoctorCreateEntity, DoctorEntity, IAdminPublisher, IDoctor } from '../core';

@Injectable()
export class DoctorService {
  constructor(
    private doctor: IDoctor,
    private adminPublisher: IAdminPublisher
  ) {}

  async getDoctor(payload: DoctorCreateEntity): Promise<DoctorCreateEntity> {
    const { email, password } = payload

    return await this.doctor.getDoctor({email, password})
  }

  async createDoctor(payload: DoctorCreateEntity): Promise<DoctorCreateEntity> {
    return await this.doctor.createDoctor(payload)
  }

  async requestDoctor(data: any) {
    return await this.adminPublisher.publish('doctor:request', data)
  }

  async loginDoctor(payload: AuthEntity): Promise<DoctorEntity> {
    return await this.doctor.getDoctor(payload)
  }
}
