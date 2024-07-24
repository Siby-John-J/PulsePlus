import { Injectable } from '@nestjs/common';
import { AuthEntity, DoctorCreateEntity, DoctorEntity, IAdminPublisher, IDoctor } from '../core';

@Injectable()
export class DoctorServiceUsecase {
  constructor(
    private doctor: IDoctor,
    private adminPublisher: IAdminPublisher
  ) {}

  async getAllDoctors(): Promise<DoctorEntity[]> {
    return await this.doctor.getAllDoctor()
  }
  
  async getDoctor(payload: AuthEntity): Promise<DoctorCreateEntity> {
    const { email, password } = payload

    return await this.doctor.getDoctor({email, password})
  }

  async createDoctor(payload: DoctorCreateEntity): Promise<DoctorCreateEntity> {
    return await this.doctor.createDoctor({...payload, status: 'pending'})
  }

  async requestDoctor(data: DoctorCreateEntity, senderId: string) {
    const { degree, name, department } = data
    
    const payload = {
      degree,
      name,
      department,
      senderId,
      title: 'Doctor Register Request'
    }

    return await this.adminPublisher.publish('doctor:create-request', payload)
  }

  async loginDoctor(payload: AuthEntity): Promise<DoctorEntity | {error: string}> {
    const { email, password } = payload
    const response = await this.doctor.getDoctor({username: email, password})
    
    if(response.status === 'pending') {
      return { error: 'pending' }
    }

    return response
  }

  async changeDoctorStatus(_id: string, status: string) {
    return await this.doctor.changeDoctorStatus(_id, status)
  }
}
