
export class Patient {
    name: string
    age: number
    id: string
    email: string
    password: string
    family: Family[]
    refreshTokens: string[]
}

export class Family {
    name: string
    relation: string
}

export class Note {
    title: string
    content: string
    patientId: string
    created?: Date
}