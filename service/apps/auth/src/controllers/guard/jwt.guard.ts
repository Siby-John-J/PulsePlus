import { CanActivate, ExecutionContext, Injectable, NotFoundException } from "@nestjs/common";
import { Request } from "express";
import { Observable } from "rxjs";

@Injectable()
export class JwtGuard implements CanActivate {
    canActivate(context: ExecutionContext): 
        boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest<Request>()
        
        if(!req.headers['authorization']) {
            throw new NotFoundException('Authorization header is not found')
        }
        return true
    }
}