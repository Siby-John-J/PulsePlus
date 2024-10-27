import { Injectable } from "@nestjs/common";

@Injectable()
export class CombineMessageService {
    constructor() {}

    combineByTime(data: { regular: object[], polls: object[] }) {
        // const { polls, regular } = data 
        const merged = [ ...data[0], ...data[1] ]
        
        return merged.sort((a, b) => {
            return new Date(a.time) - new Date(b.time)
        })
    }
}