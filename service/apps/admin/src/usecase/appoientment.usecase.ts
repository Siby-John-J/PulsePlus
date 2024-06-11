import { Injectable } from '@nestjs/common';

@Injectable()
export class AppoinetmentUsecase {
  getHello(): string {
    return 'Hello World!';
  }
}
