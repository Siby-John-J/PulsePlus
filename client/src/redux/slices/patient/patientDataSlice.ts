import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { detailsTypes, patientTypes } from "../../../types/patient/patientTypes"

const initialState: detailsTypes = {
    name: '',
    // password: '',
    email: '',
    address: '',
    age: 0,
    blood_group: '',
    dob: '',
    gender: '',
    phone: '',
    place: '',
    refreshTokens: [],
    _id: '',
    __v: ''
}

const patient = createSlice({
    name: 'patient',
    initialState,
    reducers: {
        get(state: any, action: PayloadAction<detailsTypes>) {
            return {
                name: action.payload.name,
                // password: action.payload.password,
                address: action.payload.address,
                age: action.payload.age,
                blood_group: action.payload.blood_group,
                dob: action.payload.dob,
                email: action.payload.email,
                gender: action.payload.gender,
                phone: action.payload.phone,
                place: action.payload.place,
                refreshTokens: action.payload.refreshTokens,
                __v: action.payload.__v,
                _id: action.payload._id
            }
        },
    }
})

export const { get } = patient.actions
export default patient.reducer