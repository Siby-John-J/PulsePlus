import { PayloadAction, createSlice, current } from "@reduxjs/toolkit"

const initialState: object = {
    isOn: false,
    data: {
        title: '',
        content: '',
        senderId: '',
        _id: ''
    }
}

const appoinetmentAdminModel = createSlice({
    name: 'appointmentAdminModel',
    initialState,
    reducers: {
        onAppointModel(state: any, action: PayloadAction<any>) {
            const { title, content, senderId, _id }: any = action.payload.parsed
            
            return { isOn: true, data: { title, content, senderId, _id } }
        },
        offAppointModel() {
            return { isOn: false, data: {} }
        }
    }
})

export default appoinetmentAdminModel.reducer
export const { offAppointModel, onAppointModel } = appoinetmentAdminModel.actions
