import { useDispatch, useSelector } from "react-redux";
import { turnOnnotesFillupPopup } from "../../../redux/slices/patient/notesPopupSlice";
import { useEffect, useState } from "react";
import { useFetchPatientGetTemplate } from "../../../hooks/usePatient";
import { notesTypes } from "../../../types/patient/notesTypes";

function Notes() {
    const [notes, setNotes] = useState([])
    const dispatch = useDispatch()
    const state = useSelector((state: any) => state)

    // console.log(state.notesPopupReducer.isLoad);
    

    const popup = (e: any) => {
        dispatch(turnOnnotesFillupPopup())
    }

    const renderData = async () => {
        const url = 'http://localhost:2000/patient-service/notes/get?id=6654c8cde055e5c8c5b0a122'
        const response = await useFetchPatientGetTemplate(url)
        setNotes(response)
    }

    useEffect(() => {
        renderData()
    }, [state.notesPopupReducer.isLoad])

    return (
        <div className="notes bg-slate-300 col-span-4 row-span-4 rounded-3xl flex flex-col items-center">
            <div className="flex flex-col w-[80%] h-[80%] mt-5">
                {
                    notes.map((item: any) => <NotesModel title={item.title} content={""} />)
                }
            </div>
            <div className="">
                <h1 
                    onClick={popup}
                    className="py-[8px] px-[19px] rounded-md bg-slate-900 text-white cursor-pointer">
                    create new
                </h1>
            </div>
        </div>
    );
}

function NotesModel(props: notesTypes) {
    const { title } = props
    
    return (
        <div className="w-auto h-[60px] rounded-md flex flex-row justify-evenly items-center bg-white text-black drop-shadow-md mb-3">
            <h1 className="font-medium">{title}</h1>
            <h1 className="font-medium">12/3/33 - 9:00pm</h1>
            <h1 className="text-white bg-orange-500 h-fit px-4 py-[2px] rounded-sm text-center cursor-pointer">
                view
            </h1>
        </div>
    );
}

export default Notes