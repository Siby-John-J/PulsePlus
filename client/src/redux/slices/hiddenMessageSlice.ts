import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: any = {
    ishid: false,
    data: []
}

const hid = createSlice({
    name: 'hid',
    initialState,
    reducers: {
        hidpOn() {
            return {
                ishid: true,
                data: []
            }
        },
        hidOff(state: any, dispatch: any) {
            return {
                data: dispatch.payload.selected,
                ishid: false
            }
        }
    }
})

export const { hidOff, hidpOn } = hid.actions
export default hid.reducer