import { createSlice } from "@reduxjs/toolkit"
import { popUploadingType } from "../../../types/sliceTypes"

const initialState: popUploadingType = {
    isLoad: false
}

const notesFillupModel = createSlice({
    initialState,
    name: 'notesFillupModel',
    reducers: {
        turnOnnotesFillupPopup() {
            return { isLoad: true }
        },
        turnOffnotesFillupPopup() {
            return { isLoad: false }
        }
    }
})

export default notesFillupModel.reducer
export const { turnOffnotesFillupPopup, turnOnnotesFillupPopup } = notesFillupModel.actions
