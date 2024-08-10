import {
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
  } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { OnModuleInit } from '@nestjs/common';
import { ISocket } from 'apps/communication/src/core';
import { StringSchema } from 'joi';

  @WebSocketGateway({
    cors: {
      origin: `http://localhost:5173`,
    },
    singleton: true,
    namespace: 'text_chat'
  })
  export class TextChatGateWay implements ISocket, OnModuleInit {
    @WebSocketServer()
    server: Server;
    string = ''
    _name: undefined | any
  
    onModuleInit() {
      // this.server.of('/' + '664f330dbee60d3d1bdf35a2')
      // this.server.on('connection', (socket) => {})
      this.string = '66a23dd2f13b1055f07f98d4'
    }
  
    @SubscribeMessage('getChat')
    onnewMessage(@MessageBody() body: {
      id: string,
      role: string,
      sender: string
    }): any {
      // this.emitMessage(body, 'lwal')
      
      const { role, ...rest } = body
      
      if(role === 'doctor') {
        this.emitMessage(rest, 'sendToPatient')
      } else {
        this.emitMessage(rest, 'sendToDoctor')
      }
      
    }

    emitMessage(data: any, channel: string) {
      // this.server.of('/' + data)
      // this.server.on('connection', (socket) => {})

      this.server.emit(channel, data)
    }
}
