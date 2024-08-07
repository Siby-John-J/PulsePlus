
export class AppoinetmentEnitity {
    title:  string
    content: string 
    status: 'pending' | 'rejected' | 'processing'
    created: Date
    senderId: string
    accept: string
    valid?: Boolean
    span?: "new" | "upcoming" | "accepted"
    date?: string
    time?: string
    records?: RecordsEntity
}

export class RecordsEntity {
    departments: string[]
    groups: string[]
    doctors: string[]
}