import { Body, Controller, Delete, Get, HttpException, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { AuthenticationUsecase, AuthorizationUsecase, PublisherUseCase } from '../usecase';
import { SignIn, TokenResponseEntity } from '../core';
import { LocalGuard } from './guard';
import { Request } from 'express';
import { JwtGuard } from './guard/jwt.guard';

@Controller('authZ')
export class AuthorizationController {
  constructor(
    private auth: AuthorizationUsecase,
    private authH: AuthenticationUsecase,
    private publish: PublisherUseCase
  ) {}

  @Post('create_token')
  @UseGuards(LocalGuard)
  async signIn(@Body() data: SignIn) {
    let token: null | object = null

    const res = await this.authH.loginToAccount(data)
    if(res !== null) {
      const { accessToken, refreshToken } = this.auth.create(res)
      const { _id, name, password } = res
      
      this.publish.saveRefreshToken({
        refreshToken,
        _id,
        name,
        password
      })

      token = { accessToken }
    } else {
      throw new HttpException('user not found', HttpStatus.NOT_FOUND)
    }
    return token
  }

  @Get('status')
  @UseGuards(JwtGuard)
  status(@Req() req: Request) {
    const auth = req.headers['authorization']
    const split = auth.split(' ')[1]
    return this.auth.verify(split)
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
