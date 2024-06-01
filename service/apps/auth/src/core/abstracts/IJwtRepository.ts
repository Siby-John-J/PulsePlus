
export abstract class IJwtRepository {
    abstract createToken(data: object) : string

    abstract verifyToken(data: string) : any

    abstract invalidateToken(data: object): any

    abstract refreshToken(data: object): string

    abstract pemToJwk(): Promise<object>
}