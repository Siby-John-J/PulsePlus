import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
    turnOn: false,
    senderId: '',
    doctorId: ''
}

const appointPayment = createSlice({
    name: 'appointPayment',
    initialState,
    reducers: {
        isModel(state: any, dispatch: any): any {
            console.log(initialState);
            
            return {
                turnOn: true,
                senderId: dispatch.payload.senderId,
                doctorId: initialState.doctorId
            }
        },
        isOffModel(): any {
            return {
                turnOn: false,
                senderId: '',
                doctorId: initialState.doctorId
            }
        },
        setToModel(state: any, dispatch: any): any {
            return {
                turnOn: false,
                senderId: '',
                doctorId: dispatch.payload.doctorId
            }
        }
    }
})

export const { isModel, isOffModel, setToModel } = appointPayment.actions
export default appointPayment.reducer