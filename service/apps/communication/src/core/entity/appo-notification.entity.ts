
export class AppointmentNotificationEntity {
    title: string
    content: ContentEntity
    appointmentId: string
}

class ContentEntity {
    name: string
    age: number
    deceaseDiscription: string
}