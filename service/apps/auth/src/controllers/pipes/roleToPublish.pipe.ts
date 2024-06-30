import { PipeTransform } from "@nestjs/common";
import { LoginDto } from "../../core";

export class RoleToPublishPipe implements PipeTransform {
    transform(value: LoginDto) {
        const roles = value.role + ':login'
        const { password, username } = value
        
        return {
            roles,
            password,
            username
        }
    }
}