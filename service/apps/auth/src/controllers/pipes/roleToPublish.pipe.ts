import { PipeTransform } from "@nestjs/common";
import { LoginDto } from "../../core";

export class RoleToPublishPipe implements PipeTransform {
    transform(value: LoginDto) {
        const roles = value.roles + ':login'
        const { password, username } = value
        
        return {
            roles,
            password,
            username
        }
    }
}