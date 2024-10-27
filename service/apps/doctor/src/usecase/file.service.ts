import { Injectable } from '@nestjs/common';
import { GroupEntity, IFile, IGroup } from '../core';

@Injectable()
export class FileServiceUsecase {
  constructor(private file: IFile) {}

  async create(data: any) {
    await this.file.createFile(data)
    return { uploaded: true }
  }
}
