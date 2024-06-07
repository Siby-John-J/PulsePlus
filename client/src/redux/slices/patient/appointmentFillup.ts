import { createSlice } from "@reduxjs/toolkit"
import { popUploadingType } from "../../../types/sliceTypes"

const initialState: popUploadingType = {
    isLoad: false
}

const appoinetmentFillupModel = createSlice({
    initialState,
    name: 'appoinetmentFillupModel',
    reducers: {
        turnOnappoinetmentFillupPopup() {
            return { isLoad: true }
        },
        turnOffappoinetmentFillupPopup() {
            return { isLoad: false }
        }
    }
})

export default appoinetmentFillupModel.reducer
export const { turnOffappoinetmentFillupPopup, turnOnappoinetmentFillupPopup } = appoinetmentFillupModel.actions
