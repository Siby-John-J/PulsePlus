import { createSlice } from "@reduxjs/toolkit"

const initialState: any = {
    isPoll: false,
    file: []
}

const load = createSlice({
    name: 'load',
    initialState,
    reducers: {
        loadOn(state: any, dispatch: any) {
            return {
                isLoad: true,
                file: dispatch.payload.file
            }
        },
        loadOff() {
            return {
                isLoad: false
            }
        }
    }
})

export const { loadOff, loadOn} = load.actions
export default load.reducer