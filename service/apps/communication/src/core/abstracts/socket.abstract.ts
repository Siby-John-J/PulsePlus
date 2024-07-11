
export abstract class ISocket {
    abstract onnewMessage(val: any) : any 

    abstract onModuleInit() : any

    abstract emitMessage(data: any, channel: string)
}
