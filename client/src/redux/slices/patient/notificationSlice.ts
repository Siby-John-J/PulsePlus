import { createSlice } from "@reduxjs/toolkit"
import { popUploadingType } from "../../../types/sliceTypes"

const initialState: popUploadingType = {
    isLoad: false
}

const notificationModel = createSlice({
    initialState,
    name: 'notificationModel',
    reducers: {
        turnOnnotificationPopup() {
            return { isLoad: true }
        },
        turnOffnotificationPopup() {
            return { isLoad: false }
        }
    }
})

export default notificationModel.reducer
export const { turnOffnotificationPopup, turnOnnotificationPopup } = notificationModel.actions
