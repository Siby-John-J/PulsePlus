import { Module } from "@nestjs/common";
import { JwtFrameworkModule } from "../framework/jwt/jwtframe.module";

@Module({
    imports: [JwtFrameworkModule],
    exports: [JwtFrameworkModule]
})
export class JwtServiceModule {}