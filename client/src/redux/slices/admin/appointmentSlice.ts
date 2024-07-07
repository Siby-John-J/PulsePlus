import { PayloadAction, createSlice, current } from "@reduxjs/toolkit"
import { AppointType } from "../../../types/appoientTypes"

const initialState: object = {
    appointments: []
}

const appoinetments = createSlice({
    name: 'appointments',
    initialState,
    reducers: {
        addAppoinetments(state: any, action: PayloadAction<AppointType>) {
            const res = current(state).appointments.find((e:any) => e.title === action.payload.title)
            if(!res) state.appointments.push(action.payload)
        },
        changeStatusAppoinetments(state: any, action: PayloadAction<AppointType>) {
            const res = current(state).appointments.map((e:any) => {
                if(e.title === action.payload.title) {
                    return action.payload
                }
                return e 
            })

            return { appointments: res }
        }
    }
})

export default appoinetments.reducer
export const { addAppoinetments, changeStatusAppoinetments } = appoinetments.actions
