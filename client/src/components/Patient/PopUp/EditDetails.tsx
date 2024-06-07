import { useDispatch } from "react-redux";
import { ModelInputStyle } from "../../../types/hardcoded/styleEnum";
import { turnOffDetailsPopup } from "../../../redux/slices/patient/patientDetailPopupSlice";
import { turnOnNotFilledPopup } from "../../../redux/slices/patient/notFilledSlice";

function EditDetails() {
    const dispatch = useDispatch();
    const { STYLE } = ModelInputStyle;

    return (
        <div className="bg-white absolute top-[20%] px-4 py-2 w-fit h-fit rounded-md">
            <div className="py-3 w-[39vw] px-4">
                <h1 className="font-semibold text-[2em] font-sans">
                    Edit Patient Details
                </h1>
            </div>
            <div className="py-4 flex flex-col justify-between h-[40vh]">
                <div className="px-4 w-[100%] flex flex-row justify-evenly items-center bg-slate">
                    <div className=" w-[50%] flex flex-row justify-between items-center">
                        <h1>DOB</h1>
                        <input
                            type="date"
                            className="rounded-md w-[12.3em] outline-none border-[1px] border-gray-500 h-[2.5em] px-3"
                        />
                    </div>
                    <div className=" w-[50%] flex flex-row justify-between items-center">
                        <h1 className="pl-8">Blood</h1>
                        <input
                            type="text"
                            className="rounded-md w-[12em] outline-none border-[1px] border-gray-500 h-[2.5em] px-3"
                        />
                    </div>
                </div>
                <div className="px-4 w-[100%] flex flex-row justify-between items-center">
                    <h1>Address</h1>
                    <input type="text" className={STYLE} />
                </div>
                <div className="px-4 w-[100%] flex flex-row justify-between items-center">
                    <h1>Phone</h1>
                    <input type="number" className={STYLE} />
                </div>
                <div className="px-4 w-[100%] flex flex-row justify-evenly items-center bg-slate">
                    <div className=" w-[50%] flex flex-row justify-between items-center">
                        <h1>Gender</h1>
                        <input
                            type="text"
                            className="rounded-md w-[12.3em] outline-none border-[1px] border-gray-500 h-[2.5em] px-3"
                        />
                    </div>
                    <div className=" w-[50%] flex flex-row justify-between items-center">
                        <h1 className="pl-8">Age</h1>
                        <input
                            type="number"
                            className="rounded-md w-[12em] outline-none border-[1px] border-gray-500 h-[2.5em] px-3"
                        />
                    </div>
                </div>
                <div className="px-4 w-[100%] flex flex-row justify-between items-center">
                    <h1>Place</h1>
                    <input type="text" className={STYLE} />
                </div>
            </div>
            <div className="flex flex-row w-[100%] justify-between px-4 items-center h-[3em]">
                <div className="">
                    <button className="bg-slate-200 py-[5px] rounded-lg px-6 text-center">
                        Clear
                    </button>
                </div>
                <div className="flex flex-row w-[17em] justify-between">
                    <button
                        className="px-5"
                        onClick={(e) => {
                            dispatch(turnOffDetailsPopup())
                        }}
                    >
                        Cancel
                    </button>
                    <button 
                        className="bg-purple-700 text-white py-2 px-[2em] rounded-xl"
                        onClick={e => {
                            dispatch(turnOffDetailsPopup())
                            dispatch(turnOnNotFilledPopup())
                        }}
                        >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditDetails;
