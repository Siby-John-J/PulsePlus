import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: any = {
    isCallOn: false,
    isEnvoker: false,
    ans: '',
    sender: ''
}

const caller = createSlice({
    name: 'caller',
    initialState,
    reducers: {
        callOn(sate: any, dispatch: any) {
            return {
                isCallOn: true,
                isEnvoker: dispatch.payload.isEnvoker,
                ans: dispatch.payload.ans,
                sender: dispatch.payload.sender
            }
        },
        callOff() {
            return {
                isCallOn: false,
                isEnvoker: false,
                ans: '',
                sender: ''
            }
        }
    }
})

export const { callOff, callOn } = caller.actions
export default caller.reducer