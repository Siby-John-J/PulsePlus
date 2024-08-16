import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: any = {
    isState: false,
    offer: ''
}

const incoming = createSlice({
    name: 'incoming',
    initialState,
    reducers: {
        inComingcallOn(state: any, dispatch: any) {
            return {
                isState: true,
                offer: dispatch.payload.offer
            }
        },
        inComingcallOff() {
            return {
                isState: false
            }
        }
    }
})

export const { inComingcallOff, inComingcallOn } = incoming.actions
export default incoming.reducer