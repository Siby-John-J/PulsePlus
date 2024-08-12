import { Module } from "@nestjs/common";
import { TextChatFrameWorkModule } from "../framework/socket/textChat/textChat.module";
import { SignalingFrameWorkModule } from "../framework/socket/signaling/signaling.module";

@Module({
    imports: [TextChatFrameWorkModule, SignalingFrameWorkModule],
    exports: [TextChatFrameWorkModule, SignalingFrameWorkModule]
})
export class SocketServiceModule {}