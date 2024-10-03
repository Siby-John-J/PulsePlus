import { Injectable } from '@nestjs/common';
import { GroupEntity, GroupMessageEntity, IGroup, IGroupMessage } from '../core';

@Injectable()
export class GroupMessageServiceUsecase {
  constructor(private group: IGroupMessage) {}

  async create(data: GroupMessageEntity) {
    return await this.group.createMessage()
  }

  async getAll(): Promise<GroupEntity[]> {
    return await this.group.getAllMessage()
  }

  async remove(id: string) {
    return await this.group.removeMessage(id)
    
  }
}
