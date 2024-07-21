import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IAppointment, IDoctor } from '../../core';
import { Doctor, DoctorSchema } from './models/doctor.schema';
import { DoctorRepository } from './respository/doctor-rep.service';
import { Appoinetment, AppoinetmentSchema } from './models/appointment.schema';
import { AppoinetmentRepository } from './respository/appoint-rep.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Doctor.name,
        schema: DoctorSchema,
      },
      {
        name: Appoinetment.name,
        schema: AppoinetmentSchema,
      },
    ]),
  ],
  providers: [
    {
      provide: IDoctor,
      useClass: DoctorRepository,
    },
    {
      provide: IAppointment,
      useClass: AppoinetmentRepository,
    },
  ],
  exports: [IDoctor, IAppointment],
})
export class MongoFrameWorkModule {}
