import { Module } from "@nestjs/common";
import { IAppointment } from "../../core/abstract/IAppointment";
import { AppoinetmentSchema } from "./models/appoinetment.schema";
import { AppoinetmentRepository } from "./repositories/admin-rep.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Validation, ValidationSchema } from "./models/validation.schema";
import { ValidationtRepository } from "./repositories/validation.service";
import { IValidation } from "../../core/abstract/IValidation";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: 'Appoinetment',
                schema: AppoinetmentSchema
            },
            {
                name: Validation.name,
                schema: ValidationSchema
            }
        ])
    ],
    providers: [
        {
            provide: IAppointment,
            useClass: AppoinetmentRepository
        },
        {
            provide: IValidation,
            useClass: ValidationtRepository
        }
    ],
    exports: [IAppointment, IValidation]
})
export class MongoFrameWorkModule {}