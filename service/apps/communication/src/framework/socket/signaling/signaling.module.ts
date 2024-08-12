import { Module } from '@nestjs/common';
import { SignalingGateWay } from './signaling.gateway';
import { ISocket } from '../../../core/abstracts/socket.abstract';

@Module({
  imports: [],
  providers: [
    {
      provide: ISocket,
      useClass: SignalingGateWay,
    },
  ],
  exports: [ISocket],
})
export class SignalingFrameWorkModule {}
