import { Controller, UseInterceptors, UploadedFile, Post, UploadedFiles, Req, Delete, Param } from "@nestjs/common";
import { AnyFilesInterceptor, FileInterceptor, FilesInterceptor } from "@nestjs/platform-express";
import { unlink } from "fs";
// import multer * as from "multer"
import { FileServiceUsecase } from "../usecase/file.service";
import multer from "multer";
import { multerConfig } from "../framework/multer/multer.config";

@Controller('files')
export class FilesController {
    constructor(private filesUsecase: FileServiceUsecase) {}

    @Post()
    @UseInterceptors(AnyFilesInterceptor(multerConfig))
    async uploadFile(@UploadedFiles() files) {
        return { updated: true }
    }

    @Delete(':id')
    async removeFile(@Param() data: { id: string }) {
        unlink('./public/'+data.id, () => {})
    }
}