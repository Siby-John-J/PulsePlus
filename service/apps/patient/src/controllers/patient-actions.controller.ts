import { Body, Controller, Delete, Get, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { PatientUsecase } from '../usecase';
import { SignInDto, UpdateEntity } from '../core';
import { UpdateValidationPipe } from './pipes/update-validation.pipe';
import { IAdminPublisher } from 'apps/auth/src/core';

@Controller('actions')
export class PatientActionsController {
  constructor(private patientUsecase: PatientUsecase) {}

  @Post('update')
  @UsePipes(UpdateValidationPipe)
  updatePatient(@Body() data: UpdateEntity) {
    const { auth, ...rest } = data.query
    console.log(data);
    
    return this.patientUsecase.updatePatient(rest, data.payload)
  }

  @Put('update_password')
  updatePassword(data: any) {}
  

  @Get('get')
  getPatient(@Query() payload: object) {
      const res = this.patientUsecase.getPatient(payload)
      // this.patientUsecase.createAppoinetment('s')

      return res
  }

  @Get('getall')
  getAllPatients() {
      return this.patientUsecase.getAllPatients()
  }

  @Post('create')
  createPatient(@Body(new ValidationPipe()) data: SignInDto) {
      return this.patientUsecase.createPatient(data)
  }

  @Delete('delete')
  deletePatient() {
      return this.patientUsecase.deletePatient()
  }

  @Post('create_appoinetment')
  createAppoinetment(@Body() data: any) {
    this.patientUsecase.createAppoinetment(data)
  }
}
