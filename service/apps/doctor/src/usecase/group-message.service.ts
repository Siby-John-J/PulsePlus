import { Injectable } from '@nestjs/common';
import { GroupEntity, GroupMessageEntity, GroupPollEntity, IGroup, IGroupMessage, IGroupPollMessage } from '../core';

@Injectable()
export class GroupMessageServiceUsecase {
  constructor(
    private group: IGroupMessage,
    private poll: IGroupPollMessage,
  ) {}

  async create(data: GroupMessageEntity | GroupPollEntity) {
    if(data.type === 'poll') {
      return await this.poll.createPoll(data)
    }

    if(data.type === 'multimedia') {
      
    }

    if(data.type === 'text') {
      return await this.group.createMessage(data)
    }
  }

  async getAll(): Promise<any> {
    const regular =  await this.group.getAllMessage()
    const polls = await this.poll.getAllPoll()
    return [regular, polls]
  }

  async remove(id: string) {
    return await this.group.removeMessage(id)
    
  }

  async update(groupId: string, rest: { question:string, choice: string }) {
    const { choice, question } = rest
    
    // return await this.group.updatePoll(groupId, question, choice)
  }
}
