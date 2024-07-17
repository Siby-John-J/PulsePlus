import { Controller } from '@nestjs/common';
import { DoctorService } from '../usecase';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @MessagePattern('signup')
  getHello(@Payload() data: any): string {
    return this.doctorService.getHello();
  }
}
