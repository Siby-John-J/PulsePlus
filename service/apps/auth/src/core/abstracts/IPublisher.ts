
export abstract class IPatientPublisher {
    abstract publish(channel: string, payload: any): any
}

export abstract class IAdminPublisher {
    abstract publish(channel: string, payload: any): any
}