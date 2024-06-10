import { useDispatch, useSelector } from "react-redux"
import { turnOffnotesFillupPopup } from "../../../redux/slices/patient/notesPopupSlice"
import { useFetchPatientTemplate } from "../../../hooks/usePatient"
import { useState } from "react"
import { addNotes } from "../../../redux/slices/patient/notesSlice"
import { notesTypes } from "../../../types/patient/notesTypes"

function CreateNote() {
    const dispatch = useDispatch()
    const [data, setData] = useState<notesTypes>({
        content: '',
        title: ''
    })

    const saveNotes = async() => {
        dispatch(turnOffnotesFillupPopup())

        const url  = 'http://localhost:2000/notes'
        const response = await useFetchPatientTemplate(url, data)
        console.log(response)
        
    }

    return (
        <div className="bg-white absolute top-[10%] px-4 py-2 w-[30em] h-fit rounded-md">
            <h1 className="font-semibold py-2 text-lg">Create Note</h1>
            <div className=" h-[5em] flex flex-col justify-evenly">
                <div className="flex flex-row justify-between px-4">
                    <h1 className="font-medium">Title</h1>
                    <input type="text" 
                        onChange={e => {
                            setData(state => {
                                state.title = e.target.value
                                return state
                            })
                        }}
                        className="px-2 py-1 outline-none w-[80%] border-[1px] border-black"/>
                </div>
                <div className="flex flex-row justify-between px-4">
                    <h1 className="font-medium">Content</h1>
                    <input type="text" 
                        onChange={e => {
                            setData(state => {
                                state.content = e.target.value
                                return state
                            })
                        }}
                        className="px-2 py-1 outline-none w-[80%] border-[1px] border-black"/>
                </div>
            </div>
            <div className="flex flex-row py-1 justify-end">
                <button className="px-4 mx-4 py-1 rounded-md text-white bg-red-500"
                    onClick={e => {
                        dispatch(turnOffnotesFillupPopup())
                    }}
                >Cancel</button>
                <button className="px-4 mx-4 py-1 rounded-md text-white bg-green-500" onClick={saveNotes}>Send</button>
            </div>
        </div>
  )
}

export default CreateNote