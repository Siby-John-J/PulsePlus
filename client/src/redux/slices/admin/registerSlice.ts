import { PayloadAction, createSlice, current } from "@reduxjs/toolkit"
import { RegisterType } from "../../../types/registerTypes"

const initialState: object = {
    registers: []
}

const registers = createSlice({
    name: 'registers',
    initialState,
    reducers: {
        addRegisters(state: any, action: PayloadAction<RegisterType>) {
            const res = current(state).registers.find((e:any) => e.senderId === action.payload.senderId)
            if(!res) state.registers.push(action.payload)
        },
        changeStatusRegisters(state: any, action: PayloadAction<RegisterType>) {
            const res = current(state).registers.map((e:any) => {
                if(e.senderId === action.payload.senderId) {
                    return action.payload
                }
                return e 
            })

            return { registers: res }
        }
    }
})

export default registers.reducer
export const { addRegisters, changeStatusRegisters } = registers.actions
