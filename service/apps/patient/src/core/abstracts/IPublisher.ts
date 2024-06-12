
export abstract class IPublisher {
    abstract publish(channel: string, payload: any): any
}