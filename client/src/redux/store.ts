import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./slices/authSlice"
import patientReducer from "./slices/patient/patientDataSlice"
import patientDetailPopupReducer from "./slices/patient/patientDetailPopupSlice"
import notSendAppoinetmentReducer from "./slices/patient/notSendAppoinetment"
import notFilledSliceReducer from "./slices/patient/notFilledSlice"
import appointmentFillupReducer from "./slices/patient/appointmentFillup"

export const store = configureStore({
    reducer: {
        authReducer,
        patientReducer,
        patientDetailPopupReducer,
        notSendAppoinetmentReducer,
        notFilledSliceReducer,
        appointmentFillupReducer
    }
})