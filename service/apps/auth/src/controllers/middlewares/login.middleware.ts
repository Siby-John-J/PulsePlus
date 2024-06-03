import { HttpException, HttpStatus, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

export class ValidateRequestMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const validation_token = req.headers['authorization']
        if(validation_token === process.env.VALIDATION_REQUEST_TOKEN) {
            next()
        } else {
            throw new HttpException('invalid header', 400)
        }
    }
}