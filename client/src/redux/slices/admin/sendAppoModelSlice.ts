import { PayloadAction, createSlice, current } from "@reduxjs/toolkit"

const initialState: object = {
    isOn: false
}

const appoinetmentAdminModel = createSlice({
    name: 'appointmentAdminModel',
    initialState,
    reducers: {
        onAppointModel() {
            return { isOn: true }
        },
        offAppointModel() {
            return { isOn: false }
        }
    }
})

export default appoinetmentAdminModel.reducer
export const { offAppointModel, onAppointModel } = appoinetmentAdminModel.actions
