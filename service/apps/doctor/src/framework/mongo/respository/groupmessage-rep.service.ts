import { InjectModel } from '@nestjs/mongoose';
import { GroupEntity, GroupMessageEntity, GroupPollEntity, IGroupMessage } from "../../../core"
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { GroupMessage } from '../models/groupmessage.schema';

@Injectable()
export class GroupMessageRepository extends IGroupMessage {
  constructor(
    @InjectModel(GroupMessage.name) readonly groupSchema: Model<GroupMessageEntity>,
  ) {
    super();
  }

  banMessage(id: string) {
      
  }

  async createMessage(data: GroupMessageEntity | { groupId: string } | GroupPollEntity) {
    return await this.groupSchema.create(data)
  }
  
  async getAllMessage(id: string) {
      return await this.groupSchema.aggregate([
        { $match: { groupId: id } },
        { $lookup: {
          from: 'groups',
          localField: 'groupId',
          foreignField: '_id',
          as: 'captureData'
        }},
        // {
        //   $unwind: {
        //     path: '$data'
        //   }}
        ])
  }

  getMessage(id: string) {
      
  }

  removeMessage(id: string) {
      
  }
}
