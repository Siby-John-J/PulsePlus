import { Module } from "@nestjs/common";
import { MulterModule } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { MulterFileFramework } from "./multer.framework";
import { IFile } from "../../core";

@Module({
    imports: [
        MulterModule.register({
            storage: diskStorage({
                destination: './uploads',
                filename: (req, file, cb) => {
                    const filename = file.originalname
                    console.log('filename');
                    
                    cb(null, filename)
                }
            })
        })
    ],
    providers: [
        {
            useClass: MulterFileFramework,
            provide: IFile,
        },
    ],
    exports: [IFile]
})
export class MulterFrameworkModule {}