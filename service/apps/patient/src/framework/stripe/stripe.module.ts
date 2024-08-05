import { Module } from "@nestjs/common";
import { IPayment } from "../../core";
import { StripeFramework } from "./stripe.framework";

@Module({
    providers: [
        {
            useClass: StripeFramework,
            provide: IPayment
        }
    ],
    exports: [IPayment]
})
export class StripeModule {}