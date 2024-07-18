import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
    exists: false
}

const accountExist = createSlice({
    name: 'accountExist',
    initialState,
    reducers: {
        setExModel() {
            return {
                exists: true
            }
        },
        removeExModel() {
            return {
                exists: false
            }
        }
    }
})

export const { removeExModel, setExModel } = accountExist.actions
export default accountExist.reducer