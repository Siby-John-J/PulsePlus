import { Controller } from '@nestjs/common';
import { DoctorService } from '../usecase';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class DoctorAuthController {
  constructor(private readonly doctorService: DoctorService) {}

  @MessagePattern('signup')
  async create(@Payload() data: any): Promise<any> {
    try {
      const exist = await this.doctorService.getDoctor(JSON.parse(data))

      if(exist !== null) {
        return { error: 'account already exists' }
      }
    
      return await this.doctorService.createDoctor(JSON.parse(data));
    } catch (error) {
      return { error: 'not created' }
    }
  }

  @MessagePattern('login')
  login(@Payload() data: any): any {
    return this.doctorService.loginDoctor(data)
  }
}
