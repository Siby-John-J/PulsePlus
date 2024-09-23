import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: any = {
    isPoll: false
}

const poll = createSlice({
    name: 'poll',
    initialState,
    reducers: {
        pollOn() {
            return {
                isPoll: true
            }
        },
        pollOff() {
            return {
                isPoll: false
            }
        }
    }
})

export const { pollOff, pollOn} = poll.actions
export default poll.reducer