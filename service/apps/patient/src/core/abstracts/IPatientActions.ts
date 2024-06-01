
export abstract class IPatientActions {
    abstract saveToken(query: object, token: string): Promise<boolean>

    abstract getToken(query: object): any
}