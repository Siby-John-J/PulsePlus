import { ArgumentMetadata, HttpException, PipeTransform } from "@nestjs/common";
import { UpdateEntity } from "../../core";

export class UpdateValidationPipe implements PipeTransform {
    transform(value: UpdateEntity, metadata: ArgumentMetadata) {
        const { email, phone, dob, blood_group, ...rest } = value
        
        for (const value in rest) {
            if(value === 'age' && (typeof rest[value]) !== 'number' ||
                value !== 'age' && (typeof rest[value]) !== 'string') {
                throw new HttpException("invalid payload", 400)
            }
        }

        if(dob) {
            const date = new Date(dob)
            if(date.toString() === 'Invalid Date') throw new HttpException('invalid payload', 400)
        }
        
        if(blood_group) {
            const res = blood_group.match(/\w[+?-]ve/)
            if(!res) throw new HttpException('invalid payload', 400)
        }

        if(phone) {
            const phone_res = phone.match(/\+\d{12}/)
            if(!phone_res) throw new HttpException('invalid payload', 400)
        }

        if(email) {
        const email_res = email.match(/\w*[@]gmail*\.com/)
            if(!email_res) throw new HttpException('invalid payload', 400)
        }

        const payload = {
            ...rest,
            dob,
            phone,
            blood_group,
            email
        }

        return payload
    }
}