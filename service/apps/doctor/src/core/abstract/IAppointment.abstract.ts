
export abstract class IAppointment {
    abstract createAppointment(payload: object)
    abstract getAppointment(id: string)
    abstract acceptAppointment(id: string)
    abstract deleteAppointment(id: string)
}