import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IAppointment, IDoctor, IGroup } from '../../core';
import { Doctor, DoctorSchema } from './models/doctor.schema';
import { DoctorRepository } from './respository/doctor-rep.service';
import { GroupRepository } from './respository/group-rep.service';
import { Group, GroupSchema } from './models/group.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Doctor.name,
        schema: DoctorSchema,
      },
      {
        name: Group.name,
        schema: GroupSchema,
      },
    ]),
  ],
  providers: [
    {
      provide: IDoctor,
      useClass: DoctorRepository,
    },
    {
      provide: IGroup,
      useClass: GroupRepository
    }
  ],
  exports: [IDoctor, IGroup],
})
export class MongoFrameWorkModule {}
