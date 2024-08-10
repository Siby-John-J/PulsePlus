import { Module } from "@nestjs/common";
import { TextChatFrameWorkModule } from "../framework/socket/textChat/textChat.module";

@Module({
    imports: [TextChatFrameWorkModule],
    exports: [TextChatFrameWorkModule]
})
export class SocketServiceModule {}