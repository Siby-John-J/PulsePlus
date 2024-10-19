import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IAppointment, IDoctor, IGroup, IGroupMessage, IGroupPollMessage } from '../../core';
import { Doctor, DoctorSchema } from './models/doctor.schema';
import { DoctorRepository } from './respository/doctor-rep.service';
import { GroupRepository } from './respository/group-rep.service';
import { Group, GroupSchema } from './models/group.schema';
import { GroupMessageRepository } from './respository/groupmessage-rep.service';
import { GroupPolleRepository } from './respository/group-poll.-rep.service';
import { GroupMessage, GroupMessageSchema } from './models/groupmessage.schema';
import { GroupPoll, GroupPollSchema } from './models/group-poll.schema';

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
      {
        name: GroupMessage.name,
        schema: GroupMessageSchema,
      },
      {
        name: GroupPoll.name,
        schema: GroupPollSchema,
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
    },
    {
      provide: IGroupMessage,
      useClass: GroupMessageRepository
    },
    {
      provide: IGroupPollMessage,
      useClass: GroupPolleRepository
    }
  ],
  exports: [IDoctor, IGroup, IGroupMessage, IGroupPollMessage],
})
export class MongoFrameWorkModule {}
