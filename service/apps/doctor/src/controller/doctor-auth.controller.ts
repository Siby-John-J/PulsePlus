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
      
      await this.doctorService.requestDoctor(data)
      return await this.doctorService.createDoctor(JSON.parse(data));
    } catch (error) {
      return { error: 'not created' }
    }
  }

  @MessagePattern('login')
  async login(@Payload() data: any): Promise<any> {
    console.log(data);
    
    // const res = await this.doctorService.loginDoctor(JSON.parse(data))
    // console.log(res);
    
    return {res: 'hi'}
  }
}
