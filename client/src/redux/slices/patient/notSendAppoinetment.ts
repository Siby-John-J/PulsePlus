import { createSlice } from "@reduxjs/toolkit"
import { popUploadingType } from "../../../types/sliceTypes"

const initialState: popUploadingType = {
    isLoad: false
}

const notSendAppoinetmentModel = createSlice({
    initialState,
    name: 'notSendAppoinetmentModel',
    reducers: {
        turnOnnotSendAppoinetmentPopup() {
            return { isLoad: true }
        },
        turnOffnotSendAppoinetmentPopup() {
            return { isLoad: false }
        }
    }
})

export default notSendAppoinetmentModel.reducer
export const { turnOffnotSendAppoinetmentPopup, turnOnnotSendAppoinetmentPopup } = notSendAppoinetmentModel.actions