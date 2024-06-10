import { useDispatch } from "react-redux";
import { turnOnnotesFillupPopup } from "../../../redux/slices/patient/notesPopupSlice";

function Notes() {
    const dispatch = useDispatch()

    const popup = (e: any) => {
        dispatch(turnOnnotesFillupPopup())
    }

    return (
        <div className="notes bg-slate-300 col-span-4 row-span-4 rounded-3xl flex flex-col items-center">
            <div className="flex flex-col w-[80%] h-[80%] mt-5">
                <NotesModel />
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

function NotesModel() {
    return (
        <div className="w-auto h-[60px] rounded-md flex flex-row justify-evenly items-center bg-white text-black drop-shadow-md mb-3">
            <h1 className="font-medium">new-note</h1>
            <h1 className="font-medium">12/3/33 - 9:00pm</h1>
            <h1 className="text-white bg-orange-500 h-fit px-4 py-[2px] rounded-sm text-center cursor-pointer">
                view
            </h1>
        </div>
    );
}

export default Notes