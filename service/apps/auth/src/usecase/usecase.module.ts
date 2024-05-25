import { Module } from "@nestjs/common";
import { AuthenticationUsecase } from "./authentication-usecase";
import { JwtServiceModule } from "../services/jwt-service.module";

@Module({
    imports: [
        JwtServiceModule
    ],
    providers: [AuthenticationUsecase],
    exports: [AuthenticationUsecase]
})
export class UsecaseModule {}