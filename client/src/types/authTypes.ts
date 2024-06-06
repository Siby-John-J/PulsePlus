
export interface signUpType {
    name: string
    email: string
    password: string
    phone: number
}

export interface signInType {
    name: string
    password: string
    auth?: boolean
}