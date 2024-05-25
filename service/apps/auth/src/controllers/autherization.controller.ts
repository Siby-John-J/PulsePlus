import { Controller } from "@nestjs/common";
import { AutherizationUsecase } from "../usecase";

@Controller()
export class AutherizationController {
    constructor(private auth: AutherizationUsecase) {}

}