import { InjectModel } from '@nestjs/mongoose';
import { AuthEntity, DoctorCreateEntity, DoctorEntity, GroupEntity, IDoctor, IGroup } from "../../../core"
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Doctor } from '../models/doctor.schema';
import { Group } from '../models/group.schema';

@Injectable()
export class GroupRepository extends IGroup {
  constructor(
    @InjectModel(Group.name) readonly groupSchema: Model<GroupEntity>,
  ) {
    super();
  }
  
  async getAllGroup() {
      return await this.groupSchema.find()
  }

  async getGroup(id: string) {
    return await this.groupSchema.findOne({_id: id})
  }
  
  async removeGroup(id: string) {
    return await this.groupSchema.findOneAndDelete({_id: id})  
  }

  async createGroup(payload: GroupEntity) {
    return await this.groupSchema.create(payload)  
  }

  async banGroup(id: string) {
      return await this.groupSchema.findOneAndUpdate({_id: id}, { isBlock: true })
  }
}
