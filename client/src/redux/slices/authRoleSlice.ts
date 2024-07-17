import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { authType } from "../../types/sliceTypes"
import { signInType } from "../../types/authTypes"

const initialState = {
    role: 'Patient'
}

const authRole = createSlice({
    name: 'authRole',
    initialState,
    reducers: {
        setRole(state: any, action: PayloadAction<any>) {
            return {
                role: action.payload.role
            }
        }
    }
})

export const { setRole } = authRole.actions
export default authRole.reducer