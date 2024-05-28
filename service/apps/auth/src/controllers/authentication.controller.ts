import { Controller } from "@nestjs/common";
import { AuthenticationUsecase } from "../usecase";

@Controller('AuthH')
export class AuthenticationController {
    constructor(private auth: AuthenticationUsecase) {}

}
