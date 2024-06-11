import { Controller, Get } from '@nestjs/common';
import { AppoinetmentUsecase } from '../usecase';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppoinetmentController {
  constructor(private readonly appoinetment: AppoinetmentUsecase) {}

  @Get()
  getHello(): string {
    return this.appoinetment.getHello();
  }

  @MessagePattern('appoinetment')
  getAppoinetmentRequest(@Payload() data: any) {
    console.log(data)
  }
}
