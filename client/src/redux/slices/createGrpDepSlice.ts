import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: any = {
    isGrp: true
}

const grp = createSlice({
    name: 'grp',
    initialState,
    reducers: {
        grpOn() {
            return {
                isGrp: true
            }
        },
        grpOff() {
            return {
                isGrp: false
            }
        }
    }
})

export const { grpOff, grpOn} = grp.actions
export default grp.reducer