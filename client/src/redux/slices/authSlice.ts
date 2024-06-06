import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { authType } from "../../types/sliceTypes"
import { signInType } from "../../types/authTypes"

const initialState: signInType = {
    name: '',
    password: '',
    auth: false
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state: any, action: PayloadAction<signInType>) {
            return {
                name: action.payload.name,
                password: action.payload.password,
                auth: action.payload.auth
            }
        },
        logout() {
            const { auth, ...rest } = initialState
            return { ...rest, auth: false }
        }
    }
})

export const { login, logout } = auth.actions
export default auth.reducer