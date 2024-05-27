import { Body, Controller, Get, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { AuthenticationUsecase } from '../usecase';
import { SignIn } from '../core';
import { LocalGuard } from './guard';
import { Request } from 'express';
import { JwtGuard } from './guard/jwt.guard';

@Controller('auth')
export class AuthenticationController {
  constructor(private auth: AuthenticationUsecase) {}

  @Post('create')
  @UseGuards(LocalGuard)
  signIn(@Body() data: SignIn) {
    return this.auth.create(data)
  }
  
  @Get('status')
  @UseGuards(JwtGuard)
  status(@Req() req: Request) {
    const auth = req.headers['authorization']
    return this.auth.verify(auth)
  }

  @Post('refresh')
  refresh() {

  }

  @Get('well-known')
  async well_known() {
    const jwk = await this.auth.generateJwk()
    const jwks = {}
    jwks['keys'] = []
    jwks['keys'].push(jwk)

    return jwks
  }
}
