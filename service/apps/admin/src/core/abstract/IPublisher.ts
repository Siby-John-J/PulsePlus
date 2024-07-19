
export abstract class ICommunicationPublisher {
    abstract publish(channel: string, payload: any): any
}

export abstract class IDoctorPublisher {
    abstract publish(channel: string, payload: any): any
}