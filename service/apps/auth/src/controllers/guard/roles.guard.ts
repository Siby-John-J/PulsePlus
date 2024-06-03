import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { IRole, Roles } from "../../core";

@Injectable()
export class LocalGuard implements CanActivate {
    canActivate(context: ExecutionContext): 
        boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest()
        
        const extractedRole = req.headers['roles']

        if(extractedRole === undefined) return false

        return true
    }
}