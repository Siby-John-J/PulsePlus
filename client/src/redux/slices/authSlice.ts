import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { authType } from "../../types/sliceTypes"

const initialState: authType = {
    name: '',
    password: ''

}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state: any, action: PayloadAction<authType>) {
            return {
                name: action.payload.name,
                password: action.payload.password
            }
        },
        logout() {
            return initialState
        }
    }
})

export const { login, logout } = auth.actions
export default auth.reducer