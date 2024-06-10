import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { notesTypes } from "../../../types/patient/notesTypes"

const initialState: notesTypes = {
    content: '',
    title: ''
}

const notes = createSlice({
    initialState,
    name: 'notes',
    reducers: {
        addNotes(state: any, action: PayloadAction<notesTypes>) {
            return {
                content: action.payload.content,
                title: action.payload.title   
            }
        }
    }
})

export default notes.reducer
export const { addNotes } = notes.actions
