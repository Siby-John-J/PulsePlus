import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./slices/authSlice"
import patientReducer from "./slices/patient/patientDataSlice"
import patientDetailPopupReducer from "./slices/patient/patientDetailPopupSlice"
import notSendAppoinetmentReducer from "./slices/patient/notSendAppoinetment"
import notFilledSliceReducer from "./slices/patient/notFilledSlice"
import appointmentFillupReducer from "./slices/patient/appointmentFillup"
import notesPopupReducer from "./slices/patient/notesPopupSlice"
import appointmentReducer from "./slices/admin/appointmentSlice"
import nottifcationReducer from "./slices/patient/notificationSlice"
import layoutReducer from "./slices/patient/layoutSlice"
import notificationListReducer from "./slices/patient/notificationDataSlice"
import appointmentAdminReducer from "./slices/admin/sendAppoModelSlice"
import registerAdminReducer from "./slices/admin/registerSlice"
import authRoleReducer from "./slices/authRoleSlice"
import accountExistsReducer from "./slices/accountExistsSlice"
import appointPaymentReducer from "./slices/doctor/appointPaymentSlice"
import textChatReducer from "./slices/doctor/textChatSlice"
import callReducer from "./slices/callSlice"
import incomingReducer from "./slices/incomingSlice"
import pollReducer from "./slices/pollSlice"
import groupReducer from "./slices/createGrpDepSlice"
import notesReducer from "./slices/patient/notesSlice"

export const store = configureStore({
    reducer: {
        authReducer,
        patientReducer,
        patientDetailPopupReducer,
        notSendAppoinetmentReducer,
        notFilledSliceReducer,
        appointmentFillupReducer,
        notesPopupReducer,
        // notesReducer,
        appointmentReducer,
        nottifcationReducer,
        layoutReducer,
        notificationListReducer,
        appointmentAdminReducer,
        authRoleReducer,
        accountExistsReducer,
        registerAdminReducer,
        appointPaymentReducer,
        textChatReducer,
        callReducer,
        incomingReducer,
        pollReducer,
        groupReducer
    }
})
