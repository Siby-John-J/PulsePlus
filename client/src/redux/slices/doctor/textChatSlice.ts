import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    senderId: '',
    receverId: '',
    chatData: []
}

const doctorTextChat = createSlice({
    name: 'doctorTextChat',
    initialState,
    reducers: {
        changeChatView(state: any, dispatch: any) {
            return {
                senderId: dispatch.payload.senderId,
                receverId: dispatch.payload.receverId,
                chatData: dispatch.payload.data
            }
        }
    }
})

export const { changeChatView} = doctorTextChat.actions
export default doctorTextChat.reducer