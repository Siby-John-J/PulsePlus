import { Module } from '@nestjs/common';
import { TextChatGateWay } from './textChat.gateway';
import { ISocket } from '../../../core/abstracts/socket.abstract';

@Module({
  imports: [],
  providers: [
    {
      provide: ISocket,
      useClass: TextChatGateWay,
    },
  ],
  exports: [ISocket],
})
export class TextChatFrameWorkModule {}
