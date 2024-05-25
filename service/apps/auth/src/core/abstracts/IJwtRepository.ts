
export abstract class IJwtRepository {
    abstract createToken(data: object) : string

    abstract verifyToken(data: string) : any
}