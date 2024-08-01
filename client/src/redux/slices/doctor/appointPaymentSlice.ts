import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
    turnOn: false,
    senderId: '',
    appointId: ''
}

const appointPayment = createSlice({
    name: 'appointPayment',
    initialState,
    reducers: {
        isModel(state: any, dispatch: any): any {
            return {
                turnOn: true,
                senderId: dispatch.payload.senderId,
                appointId: dispatch.payload.appointId
            }
        },
        isOffModel(): any {
            return {
                turnOn: false,
                senderId: '',
                appointId: initialState.appointId
            }
        },
        setToModel(state: any, dispatch: any): any {
            return {
                turnOn: false,
                senderId: '',
                appointId: dispatch.payload.appointId
            }
        }
    }
})

export const { isModel, isOffModel, setToModel } = appointPayment.actions
export default appointPayment.reducer