import { Body, Controller, Delete, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthorizationUsecase } from '../usecase';
import { SignIn } from '../core';
import { LocalGuard } from './guard';
import { Request } from 'express';
import { JwtGuard } from './guard/jwt.guard';

@Controller('authZ')
export class AuthorizationController {
  constructor(private auth: AuthorizationUsecase) {}

  @Post('create_token')
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

  @Post('refresh_token')
  // @UseGuards(LocalGuard)
  refresh(@Body() token: object) {
    return this.auth.refresh(token)
  }

  @Delete('delete_token')
  logout() {
    return "whole"
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
