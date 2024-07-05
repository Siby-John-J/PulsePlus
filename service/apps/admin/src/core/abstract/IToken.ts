
export abstract class IAdminTokens {
    abstract saveToken(query: object, token: string): Promise<boolean>

    abstract getToken(query: object): any

    abstract clearTokens(query: object): any
}