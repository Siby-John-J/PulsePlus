import { signInType } from "../authTypes"
import { authType } from "../sliceTypes"

export interface patientTypes {
    authTypes: signInType
    detailsTypes: detailsTypes
    created: string
}

export interface detailsTypes {
    name: string
    _id?: string
    __v?: string
    refreshTokens?: string[]
    email: string
    address: string
    age: number
    blood_group: string
    dob: string
    gender: string
    phone: string
    place: string
}

export interface patientDetailsReducerType {
    patientReducer: detailsTypes
}

export interface patientAuthReducerType {
    patientAuthReducer: signInType
}