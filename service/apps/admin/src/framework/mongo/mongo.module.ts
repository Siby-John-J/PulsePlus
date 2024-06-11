import { Module } from "@nestjs/common";
import { IAppointment } from "../../core/abstract/IAppointment";
import { AppoinetmentSchema } from "./models/appoinetment.schema";
import { AppoinetmentRepository } from "./repositories/admin-rep.service";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: 'Appoinetment',
                schema: AppoinetmentSchema
            }
        ])
    ],
    providers: [
        {
            provide: IAppointment,
            useClass: AppoinetmentRepository
        }
    ],
    exports: [IAppointment]
})
export class MongoFrameWorkModule {}