
export interface UpdateEntity {
    payload: Payload
    query: Query
}

export interface Payload {
    dob: Date
    address: string
    phone: string
    blood_group: string
    age: number
    place: string
    gender: string
}

export interface Query {
    name: string
    password: string
    auth?: boolean
}