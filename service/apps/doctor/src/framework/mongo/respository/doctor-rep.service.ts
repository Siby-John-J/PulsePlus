import { InjectModel } from '@nestjs/mongoose';
import { AuthEntity, DoctorCreateEntity, DoctorEntity, IDoctor } from "../../../core"
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Doctor } from '../models/doctor.schema';

@Injectable()
export class DoctorRepository extends IDoctor {
  constructor(
    @InjectModel(Doctor.name) readonly doctorSchema: Model<DoctorEntity>,
  ) {
    super();
  }
  
  async createDoctor(creedientals: DoctorCreateEntity): Promise<DoctorCreateEntity> {
      return await this.doctorSchema.create(creedientals)
  }

  async getDoctor(credientals: AuthEntity): Promise<DoctorEntity> {
      return await this.doctorSchema.findOne(credientals)
  }

  async blockDoctor(id: string): Promise<DoctorEntity> {
      return await this.doctorSchema.findOneAndUpdate({id})
  }
}
