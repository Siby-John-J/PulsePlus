import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";

@Injectable()
export class LocalGuard implements CanActivate {
    canActivate(context: ExecutionContext): 
        boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest()
    
        console.log(req.body, ' is dis');
        
        return true
    }
}