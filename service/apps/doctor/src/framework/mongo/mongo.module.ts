import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IDoctor } from '../../core';
import { DoctorSchema } from './models/doctor.schema';
import { DoctorRepository } from './respository/doctor-rep.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Doctor',
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
