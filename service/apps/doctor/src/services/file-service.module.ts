import { Module } from "@nestjs/common";
import { MulterFrameworkModule } from "../framework/multer/multer.module";

@Module({
    imports: [MulterFrameworkModule],
    exports: [MulterFrameworkModule]
})
export class FileModuleService {}