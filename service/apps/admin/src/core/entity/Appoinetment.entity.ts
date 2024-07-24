
export class AppoinetmentEnitity {
    title:  string
    content: string 
    status: 'pending' | 'rejected' | 'processing'
    created: Date
    senderId: string
    accept: Boolean
    span?: "new" | "rejected" | "accepted"
    time?: Date
    records?: RecordsEntity
}

export class RecordsEntity {
    departments: string[]
    groups: string[]
    doctors: string[]
}