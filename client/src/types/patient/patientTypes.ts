
export interface patientTypes {
    _id: string
    __v: string
    name: string
    password: string
    email: string
    address: string
    age: number
    blood_group: string
    dob: Date
    gender: string
    phone: string
    place: string
    refreshTokens: string[]
}

export interface patientReducerType {
    patientReducer: patientTypes
}

