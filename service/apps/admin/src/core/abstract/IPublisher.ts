
export abstract class ICommunicationPublisher {
    abstract publish(channel: string, payload: any): any
}