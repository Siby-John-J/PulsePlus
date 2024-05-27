import { Module } from "@nestjs/common";
import { IJwtRepository } from "../../core";
import { JwtFramework } from "./jwt.framework";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [
        JwtModule.register({
            secret: 'xxx',
            signOptions: { expiresIn: '1d' }}
        ),
    ],
    providers: [
        {
            provide: IJwtRepository,
            useClass: JwtFramework
        }
    ],
    exports: [IJwtRepository]
})
export class JwtFrameworkModule {}