import { createSlice, current } from "@reduxjs/toolkit"

const initialState: { isLoad: boolean, file: any[] } = {
    isLoad: false,
    file: []
}

const load = createSlice({
    name: 'load',
    initialState,
    reducers: {
        loadOn() {
            return {
                isLoad: true,
                file: []
            }
        },
        loadOff() {
            return {
                isLoad: false,
                file: []
            }
        },
        addFiles(state: any, dispatch: any) {
            return {
                isLoad: true,
                file: [...current(state).file, ...dispatch.payload.file],
            }
        },
        removeFiles(state: any, dispatch: any) {
            return {
                isLoad: true,
                file: (function () {
                    const res: [] = current(state).file.filter(e => e.name !== dispatch.payload.file)
                    return res
                }())
            }
        }
    }
})

export const { loadOff, loadOn, removeFiles, addFiles} = load.actions
export default load.reducer