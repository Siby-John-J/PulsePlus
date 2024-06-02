import { ArgumentMetadata, HttpException, PipeTransform } from "@nestjs/common";
import { UpdateEntity } from "../../core";

export class UpdateValidationPipe implements PipeTransform {
    transform(value: UpdateEntity, metadata: ArgumentMetadata) {
        const { phone, dob, blood_group, ...rest } = value

        for (const value in rest) {
            if(value === 'age' && (typeof rest[value]) !== 'number' || 
                value !== 'age' && (typeof rest[value]) !== 'string') {
                throw new HttpException("invalid payload", 400)
            }
        }

        const date = new Date(dob)
        if(date.toString() === 'Invalid Date') throw new HttpException('invalid payload', 400)
        
        const res = blood_group.match(/\w[+?-]ve/)
        if(!res) throw new HttpException('invalid payload', 400)

        const phone_res = phone.match(/\+\d{12}/)
        if(!phone_res) throw new HttpException('invalid payload', 400)

        const payload = {
            ...rest,
            dob,
            phone,
            blood_group
        }

        return payload
    }
}