import { Injectable } from '@nestjs/common';
import { GroupEntity, GroupMessageEntity, GroupPollEntity, IGroup, IGroupMessage, IGroupPollMessage } from '../core';

@Injectable()
export class GroupPollServiceUsecase {
  constructor(
    private poll: IGroupPollMessage
  ) {}

  async create(data: GroupPollEntity) {
    return await this.poll.createPoll(data)
  }

  async delete() {

  }

  async update() {

  }

  async get() {
    return this.poll.getAllPoll()
  }
}
