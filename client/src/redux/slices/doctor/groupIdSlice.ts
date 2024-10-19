import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    id: ''
}

const groupId = createSlice({
    name: 'groupId',
    initialState,
    reducers: {
        setGroupId(state: any, dispatch: any) {
            return {
                id: dispatch.payload.groupId
            }
        }
    }
})

export const { setGroupId } = groupId.actions
export default groupId.reducer