import { Controller, Get } from "@nestjs/common";
import { PublisherUseCase } from "../usecase";

@Controller('test')
export class TestController {
    constructor(private publish: PublisherUseCase) {}

    @Get()
    testFunc() {
        this.publish.testUsecase()
    }
}