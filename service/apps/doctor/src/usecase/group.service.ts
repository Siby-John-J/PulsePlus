import { Injectable } from '@nestjs/common';
import { GroupEntity, IGroup } from '../core';

@Injectable()
export class GroupServiceUsecase {
  constructor(private group: IGroup) {}

  async create(data: GroupEntity) {
    return await this.group.createGroup(data)
  }

  async getAll(): Promise<GroupEntity[]> {
    return await this.group.getAllGroup()
  }

  async get(id: string) {
    return await this.group.getGroup(id)
    
  }

  async remove(id: string) {
    return await this.group.removeGroup(id)
    
  }
  
  async ban(id: string) {
    return await this.group.banGroup(id)
    
  }
}
