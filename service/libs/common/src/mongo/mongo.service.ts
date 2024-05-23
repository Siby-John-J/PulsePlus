import { Injectable } from "@nestjs/common";

@Injectable()
export class MongoService {
    getData(url: string) {
        console.log(url)
    }
}