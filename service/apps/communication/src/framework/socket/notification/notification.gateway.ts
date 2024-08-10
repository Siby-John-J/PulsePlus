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
    singleton: true
  })
  export class MainGateWay implements ISocket, OnModuleInit {
    @WebSocketServer()
    server: Server;
    _name: undefined | any
  
    onModuleInit() {
      // this.server.of('/' + '664f330dbee60d3d1bdf35a2')
      // this.server.on('connection', (socket) => {})
    }
  
    @SubscribeMessage('msg')
    onnewMessage(@MessageBody() body: any): any {
      console.log(body);
      
    }

    emitMessage(data: any, channel: string) {
      // this.server.of('/' + data)
      // this.server.on('connection', (socket) => {})

      this.server.emit(channel, data)
    }
}
