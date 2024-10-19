import { InjectModel } from '@nestjs/mongoose';
import {  GroupPollEntity, IGroupPollMessage } from "../../../core"
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { GroupPoll } from '../models/group-poll.schema';

@Injectable()
export class GroupPolleRepository extends IGroupPollMessage {
  constructor(
    @InjectModel(GroupPoll.name) readonly pollSchema: Model<GroupPollEntity>,
  ) {
    super();
  }

  async createPoll(data: GroupPollEntity) {
      return await this.pollSchema.create(data)
  }

  async getAllPoll() {
    return await this.pollSchema.aggregate([
      { $lookup: {
        from: 'groups',
        localField: 'groupId',
        foreignField: '_id',
        as: 'captureData'
      }}])
  }

  getPoll(id: string) {
      
  }

  removePoll(id: string) {
      
  }

  async updatePoll(groupId: string, question: string, choice: string) {
      return await this.pollSchema.findOneAndUpdate({ groupId, question, },{
        
      })
  }
}
