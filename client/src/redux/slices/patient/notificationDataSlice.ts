import { PayloadAction, createSlice, current } from "@reduxjs/toolkit"
import { AppointType } from "../../../types/appoientTypes"

const initialState: object = {
    notifications: []
}

const notifications = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        addNotifications(state: any, action: PayloadAction<AppointType>) {
            const res = current(state).notifications.find((e:any) => e.title === action.payload.title)
            if(!res) state.appointments.push(action.payload)
        }
    }
})

export default notifications.reducer
export const { addNotifications } = notifications.actions
