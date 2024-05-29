
export class Patient {
    name: string
    age: number
    id: string
    email: string
    password: string
    family: Family[]
}

export class Family {
    name: string
    relation: string
}