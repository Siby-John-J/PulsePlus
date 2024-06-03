import { Body, Controller, Delete, Get, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { PatientUsecase } from '../usecase';
import { SignInDto } from '../core';
import { UpdateValidationPipe } from './pipes/update-validation.pipe';

@Controller('actions')
export class PatientActionsController {
  constructor(private patientUsecase: PatientUsecase) {}

  @Post('update_details')
  @UsePipes(UpdateValidationPipe)
  async updatePatient(@Body() data: any) {
    return await this.patientUsecase.updatePatient(data)
  }

  @Put('update_password')
  updatePassword(data: any) {}

  @Get('get')
  getPatient() {
      console.log('hi')
      return 'this.patientUsecase.getPatient()'
  }

  @Get('getall')
  getAllPatients() {
      return this.patientUsecase.getAllPatients()
  }

  @Post('create')
  createPatient(@Body(new ValidationPipe()) data: SignInDto) {
      console.log(data)

      return this.patientUsecase.createPatient(data)
  }

  @Delete('delete')
  deletePatient() {
      return this.patientUsecase.deletePatient()
  }
}
