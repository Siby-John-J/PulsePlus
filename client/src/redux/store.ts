import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./slices/authSlice"
import patientReducer from "./slices/patient/patientDataSlice"

export const store = configureStore({
    reducer: {
        authReducer,
        patientReducer
    }
})