import { createSlice } from "@reduxjs/toolkit"
import { popUploadingType } from "../../../types/sliceTypes"

const initialState: any = {
    isLoad: false
}

const notFilledModel = createSlice({
    initialState,
    name: 'notFilledModel',
    reducers: {
        turnOnNotFilledPopup() {
            return { isLoad: true }
        },
        turnOffNotFilledPopup() {
            return { isLoad: false }
        }
    }
})

export default notFilledModel.reducer
export const { turnOffNotFilledPopup, turnOnNotFilledPopup } = notFilledModel.actions