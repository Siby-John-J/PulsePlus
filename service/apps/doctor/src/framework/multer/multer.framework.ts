import { Injectable } from '@nestjs/common';
import { IFile } from '../../core';

@Injectable()
export class MulterFileFramework extends IFile {
  // constructor(private file: )

  async createFile(data: any) {
    return data
  }

  getAllFile(id: string) {
      
  }

  getFile(id: string) {
      
  }

  removeFile(id: string) {
      
  }
}
