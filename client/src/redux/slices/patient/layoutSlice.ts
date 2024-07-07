import { createSlice } from "@reduxjs/toolkit"

const initialState: object = {
    isLayout: false
}

const layout = createSlice({
    initialState,
    name: 'layout',
    reducers: {
        on() {
            return { isLayout: true }
        },
        off() {
            return { isLayout: false }
        }
    }
})

export default layout.reducer
export const { off, on } = layout.actions
