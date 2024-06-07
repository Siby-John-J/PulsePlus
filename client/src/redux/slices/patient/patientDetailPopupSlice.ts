import { createSlice } from "@reduxjs/toolkit"
import { detailsPopUpType,  } from "../../../types/sliceTypes"

const initialState: detailsPopUpType = {
    isLoad: false
}

const patientDetailPopupSlice = createSlice({
    initialState,
    name: 'patientDetailPopupSlice',
    reducers: {
        turnOnDetailsPopup() {
            return { isLoad: true }
        },
        turnOffDetailsPopup() {
            return { isLoad: false }
        }
    }
})

export default patientDetailPopupSlice.reducer
export const { turnOffDetailsPopup, turnOnDetailsPopup } = patientDetailPopupSlice.actions