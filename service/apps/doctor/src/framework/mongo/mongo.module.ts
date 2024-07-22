import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IDoctor } from '../../core';
import { Doctor, DoctorSchema } from './models/doctor.schema';
import { DoctorRepository } from './respository/doctor-rep.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Doctor.name,
        schema: DoctorSchema,
      },
    ]),
  ],
  providers: [
    {
      provide: IDoctor,
      useClass: DoctorRepository,
    },
  ],
  exports: [IDoctor],
})
export class MongoFrameWorkModule {}
