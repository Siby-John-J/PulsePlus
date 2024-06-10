import { useDispatch, useSelector } from "react-redux";
import { ModelInputStyle } from "../../../types/hardcoded/styleEnum";
import { turnOffDetailsPopup } from "../../../redux/slices/patient/patientDetailPopupSlice";
import { turnOnNotFilledPopup } from "../../../redux/slices/patient/notFilledSlice";
import { patientDetailsReducerType } from "../../../types/patient/patientTypes";
import { useEffect, useState } from "react";
import { usePatientUpdate } from "../../../hooks/usePatient";
import { authReducerType } from "../../../types/sliceTypes";
import { useGettoken } from "../../../hooks/useAuth";
import { useStoreSet } from "../../../hooks/useStore";
import { get } from "../../../redux/slices/patient/patientDataSlice";

function EditDetails() {
    const dispatch = useDispatch();
    const patientDetailsState = useSelector(
        (state: patientDetailsReducerType) => state.patientReducer
    );
    const auth = useSelector((state: authReducerType) => state.authReducer)
    const { STYLE } = ModelInputStyle;
    const { address, age, blood_group, gender, phone, place } = patientDetailsState
    // let _address = /address

    const [_address, setAddress] = useState(address)
    const [_age, setAge] = useState(age)
    const [_blood_group, setBg] = useState(blood_group)
    const [_gender, setGender] = useState(gender)
    const [_phone, setPhone] = useState(phone)
    const [_place, setPlace] = useState(place)

    const saveDetailsAction = async () => {
        const payload = {
           address: _address,
           age: _age,
           blood_group: _blood_group,
           gender: _gender,
           phone: _phone,
           place: _place
        }

        const res = await usePatientUpdate(payload, auth)
        
        if(res.accessToken === 'token not found') {
            const res = await useGettoken(auth)
            useStoreSet(res.accessToken)  
        }
        const response = await usePatientUpdate(payload, auth)
        const { notifications, ...rest } = response

        dispatch(get(rest))
        
        dispatch(turnOffDetailsPopup())
        dispatch(turnOnNotFilledPopup())
        
    }

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
                            // value={payload.dob}
                        />
                    </div>
                    <div className=" w-[50%] flex flex-row justify-between items-center">
                        <h1 className="pl-8">Blood</h1>
                        <input
                            type="text"
                            value={_blood_group}
                            onChange={e => {
                                setBg(item => {
                                    item = e.target.value
                                    return item
                                })
                            }}
                            className="rounded-md w-[12em] outline-none border-[1px] border-gray-500 h-[2.5em] px-3"
                        />
                    </div>
                </div>
                <div className="px-4 w-[100%] flex flex-row justify-between items-center">
                    <h1>Address</h1>
                    <input type="text" value={_address} 
                            onChange={e => {
                                setAddress(item => {
                                    item = e.target.value
                                    return item
                                })
                            }}
                        className={STYLE} />
                </div>
                <div className="px-4 w-[100%] flex flex-row justify-between items-center">
                    <h1>Phone</h1>
                    <input type="number" 
                        onChange={e => {
                            setPhone(item => item = e.target.value)
                        }}
                    value={Number(_phone)} className={STYLE} />
                </div>
                <div className="px-4 w-[100%] flex flex-row justify-evenly items-center bg-slate">
                    <div className=" w-[50%] flex flex-row justify-between items-center">
                        <h1>Gender</h1>
                        <input
                            type="text"
                            onChange={e => {
                                setGender(item => {
                                    item = e.target.value
                                    return item
                                })
                            }}
                            value={_gender}
                            className="rounded-md w-[12.3em] outline-none border-[1px] border-gray-500 h-[2.5em] px-3"
                        />
                    </div>
                    <div className=" w-[50%] flex flex-row justify-between items-center">
                        <h1 className="pl-8">Age</h1>
                        <input
                            type="number"
                            value={Number(_age)}
                            onChange={e => {
                                setAge(item => item = Number(e.target.value))
                            }}
                            className="rounded-md w-[12em] outline-none border-[1px] border-gray-500 h-[2.5em] px-3"
                        />
                    </div>
                </div>
                <div className="px-4 w-[100%] flex flex-row justify-between items-center">
                    <h1>Place</h1>
                    <input type="text"
                        onChange={e => {
                            setPlace(item => {
                                item = e.target.value
                                return item
                            })
                        }}
                        value={_place} className={STYLE} />
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
                        onClick={saveDetailsAction}
                        >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditDetails;
