import { Controller, Get, Query } from '@nestjs/common';
import { DoctorServiceUsecase } from '../usecase';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('auth')
export class DoctorAuthController {
  constructor(private readonly doctorService: DoctorServiceUsecase) {}

  @Get('get')
  async getDoctor(
    @Query() data: any
  ) {
    return await this.doctorService.getDoctor(data)
  }

  @Get('getAll')
  async getAllDoctors() {
    return await this.doctorService.getAllDoctors()
  }

  @MessagePattern('signup')
  async create(@Payload() data: any): Promise<any> {
    try {
      const exist = await this.doctorService.getDoctor(JSON.parse(data))
      
      if(exist !== null) {
        return { error: 'account already exists' }
      }
      
      const res: any = await this.doctorService.createDoctor(JSON.parse(data))
      await this.doctorService.requestDoctor(JSON.parse(data), res._id)
      
      return res
    } catch (error) {
      return { error: 'not created' }
    }
  }

  @MessagePattern('login:doctor')
  async login(@Payload() data: any): Promise<any> {
    return await this.doctorService.loginDoctor(JSON.parse(data))
  }

  @MessagePattern('doctor:change_status')
  async changeStatus(@Payload() data: string) {
    const parsed = JSON.parse(data)
    
    return await this.doctorService.changeDoctorStatus(parsed._id, parsed.status)
  }
}
