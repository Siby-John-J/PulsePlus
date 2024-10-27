import * as multer from "multer"

export const multerConfig = {
    storage: multer.diskStorage({
        destination: './public',
        filename: (req, file, cb) => {
            const filename = file.originalname
            cb(null, filename)
        }
    })
}