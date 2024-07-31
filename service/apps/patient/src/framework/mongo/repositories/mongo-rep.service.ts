import { InjectModel } from '@nestjs/mongoose';
import { IPatientRepository, Payload, Query } from '../../../core';
import { Model } from 'mongoose';
import { Patient } from '../../../core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MongoRepository extends IPatientRepository {
  constructor(
    @InjectModel(Patient.name) readonly patientschema: Model<Patient>,
  ) {
    super();
  }

  async create(data: object): Promise<Patient> {
    return await this.patientschema.create(data);
  }

  async delete(): Promise<any> {
    return await this.patientschema.deleteOne({});
  }

  async get(payload: any): Promise<Patient> {
    return await this.patientschema.findOne(payload);
  }

  async getAll(): Promise<Patient[]> {
    return await this.patientschema.find({});
  }
  
  async update(filter: Query, payload: Payload): Promise<Patient> {
    return await this.patientschema.findOneAndUpdate({
      email: filter.name,
      password: filter.password
    }, payload, {
      returnDocument: 'after',
    })
  }
}
