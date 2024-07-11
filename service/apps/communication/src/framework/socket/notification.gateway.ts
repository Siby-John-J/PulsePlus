import {
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
  } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { OnModuleInit } from '@nestjs/common';
import { ISocket } from '../../core/abstracts/socket.abstract';

  @WebSocketGateway({
    cors: {
      origin: `http://localhost:5173`,
    },
    singleton: true,
  })
  export class MainGateWay implements ISocket, OnModuleInit {
    @WebSocketServer()
    server: Server;
  
    onModuleInit() {
      this.server.on('connection', (socket) => {})
    }
  
    @SubscribeMessage('msg')
    onnewMessage(@MessageBody() body: any): any {
      console.log(body);
      
    }

    emitMessage(data: any, channel: string) {
      this.server.emit(channel, data)
    }
}
