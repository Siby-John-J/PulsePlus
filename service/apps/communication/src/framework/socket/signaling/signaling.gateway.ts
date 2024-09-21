import {
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
  } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { OnModuleInit } from '@nestjs/common';
import { ISocket } from 'apps/communication/src/core';

@WebSocketGateway({
  cors: {
    origin: `http://localhost:5173`,
  },
  singleton: true,
  namespace: 'signaling'
})
export class SignalingGateWay implements ISocket, OnModuleInit {
  @WebSocketServer()
  server: Server;
  _name: undefined | any

  onModuleInit() {

  }

  @SubscribeMessage('get_offer')
  onneOffer(@MessageBody() body: any): any {
    const { role, ...rest} = body
    console.log(role)
    
    if(role === 'Doctor') this.emitMessage(rest, 'offer_to_patient')
    if(role === 'Patient') this.emitMessage(rest, 'offer_to_doctor')
  }

  @SubscribeMessage('get_answer')
  onnewAnswer(@MessageBody() body: any): any {
    const { role, ...rest} = body
    
    if(role === 'Patient') this.emitMessage(rest, 'answer_to_doctor')
    if(role === 'Doctor') this.emitMessage(rest, 'answer_to_patient')
    
  }

  // 
  @SubscribeMessage('end_call')
  onCancelCall(@MessageBody() body: any): any {
    const { role, ...rest} = body
    console.log(rest)
    
    if(role === 'Patient') this.emitMessage(rest, 'end_call')
    if(role === 'Doctor') this.emitMessage(rest, 'end_call')
    
  }

  emitMessage(data: any, channel: string) {
    this.server.emit(channel, data)
  }
}
