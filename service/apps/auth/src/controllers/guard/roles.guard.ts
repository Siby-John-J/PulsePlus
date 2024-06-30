import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class RolesGuard implements CanActivate {
    canActivate(context: ExecutionContext): 
        boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest()
        
        const extractedRole = req.headers['roles']
        
        if(extractedRole === undefined) return false
        req.body['role'] = extractedRole

        return true
    }
}
