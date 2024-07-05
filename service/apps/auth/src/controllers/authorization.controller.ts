import { Body, Controller, Delete, Get, HttpException, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { AuthenticationUsecase, AuthorizationUsecase, PublisherUseCase } from '../usecase';
import { LoginDto } from '../core';
import { RolesGuard } from './guard';
import { Request } from 'express';
import { JwtGuard } from './guard';
import { RoleToPublishPipe } from './pipes';

@Controller('authZ')
export class AuthorizationController {
  constructor(
    private auth: AuthorizationUsecase,
    private authH: AuthenticationUsecase,
    private publish: PublisherUseCase
  ) {}

  @Post('create_token')
  @UseGuards(RolesGuard)
  async signIn(@Body() data: LoginDto) {
    let token: null | object = null
    
    const response = await this.authH.loginToAccount(data)
    
    if(response !== null) {
      const { accessToken, refreshToken } = this.auth.create(response)
      const { name, password } = response
      
      console.log(data.role);
      
      this.publish.saveRefreshToken(data.role, {
        refreshToken,
        name,
        password
      })

      token = { accessToken }
      return token
    } else {
      throw new HttpException('user not found', HttpStatus.NOT_FOUND)
    }
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
