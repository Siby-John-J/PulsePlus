import { Module } from '@nestjs/common';
import { MainGateWay } from './notification.gateway';
import { ISocket } from '../../core/abstracts/socket.abstract';

@Module({
  imports: [],
  providers: [
    {
        provide: ISocket,
        useClass: MainGateWay,
    },
  ],
  exports: [ISocket],
})
export class GatewayFrameWorkModule {}
