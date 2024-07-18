
export abstract class IAdminPublisher {
    abstract publish(channel: string, payload: any): any
}