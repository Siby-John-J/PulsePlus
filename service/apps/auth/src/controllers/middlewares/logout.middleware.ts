import { HttpException, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

export class LogoutMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const header = req.headers['authorization'].split(' ')[1]
        
        if(!header) {
            throw new HttpException('invalid header', 404)
        }

        req.headers['authorization'] = header
        next()
    }
}