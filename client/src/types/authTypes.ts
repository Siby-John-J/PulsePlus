
export interface signUpType {
    name: string
    email: string
    password: string
    phone: number
}

export interface extraSignUpType {
    degree: string
    department: string
}

export interface signInType {
    name: string
    password: string
    auth?: boolean
    id?: string
}