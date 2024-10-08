import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class CircutBreaker implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        return Promise.resolve(true)
    }
}