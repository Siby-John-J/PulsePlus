import { InjectModel } from '@nestjs/mongoose';
import { AuthEntity, DoctorCreateEntity, DoctorEntity, GroupEntity, GroupMessageEntity, IDoctor, IGroup, IGroupMessage } from "../../../core"
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Doctor } from '../models/doctor.schema';
import { Group } from '../models/group.schema';

@Injectable()
export class GroupMessageRepository extends IGroupMessage {
  constructor(
    @InjectModel(Group.name) readonly groupSchema: Model<GroupEntity>,
  ) {
    super();
  }

  banMessage(id: string) {
      
  }

  async createMessage(data: GroupMessageEntity) {
    return await this.groupSchema.findOneAndUpdate({_id}, data)
  }

  getAllMessage() {
      
  }

  getMessage(id: string) {
      
  }

  removeMessage(id: string) {
      
  }
}
