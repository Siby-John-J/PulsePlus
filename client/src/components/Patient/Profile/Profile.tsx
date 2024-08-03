import { useEffect, useState } from "react";
import { turnOnappoinetmentFillupPopup } from "../../../redux/slices/patient/appointmentFillup";
import { get } from "../../../redux/slices/patient/patientDataSlice";
import { useFetchRefreshToken } from "../../../hooks/useFetch";
import { useGettoken } from "../../../hooks/useAuth";
import { useStoreSet } from "../../../hooks/useStore";
import { authReducerType } from "../../../types/sliceTypes";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client"
import { patientDetailsReducerType } from "../../../types/patient/patientTypes";
import { turnOnnotificationPopup } from "../../../redux/slices/patient/notificationSlice";
import Main from "./Main";
import Details from "./Details";
import Appointments from "./Appoinetments";
import Id from "./Id";
import Notes from "./Notes";
import Family from "./Family";
import { on } from "../../../redux/slices/patient/layoutSlice";

let id: string | undefined = ''

function Profile() {
    const [isNewMessage, setIsnewMessage] = useState<number>(0)
    const navigate = useNavigate()
    const auth = useSelector((state: authReducerType) => state.authReducer);
    const dispatch = useDispatch()
    const patientDetailsState = useSelector(
        (state: patientDetailsReducerType) => state.patientReducer
    );

    // const socket = io('http://localhost:3003/' +  patientDetailsState._id)    
    
    // socket.on('notification:update', (data: any) => {
    //     setIsnewMessage(isNewMessage + 1)
    // })

    const authentication = async() => {
        const response = await useFetchRefreshToken(auth)      
                
        if(response.accessToken === 'token not found' && auth.auth) {
            const res = await useGettoken(auth, 'patient')
            useStoreSet(res.accessToken)
            const response = await useFetchRefreshToken(auth)
            
            dispatch(get(response))
        } else if(auth.auth === false) {
            navigate('/')
        } else {
            dispatch(get(response))
        }
    }

    useEffect(() => {
        authentication()
    }, [])

    const {
        address,
        name,
        dob,
        age, 
        blood_group,
        email,
        gender,
        phone,
        place,
    } = patientDetailsState;

    return (
        <div className="mt-0 ml-8 mr-8 w-[80vw] grid grid-cols-10 grid-rows-9 gap-5">
            <div className="flex flex-row justify-between mt-4 text-black text-3xl font-semibold col-span-10 rounded-2xl">
                <div>Profile</div>
                <div className="flex flex-row items-center">
                    <div
                        onClick={e => {
                            setIsnewMessage(0)
                            dispatch(on())
                            dispatch(turnOnnotificationPopup())
                        }} 
                        className="mr-6 w-[1em] h-[1em] bg-green-400 rounded-full cursor-pointer"
                        >
                            {
                                isNewMessage ?
                                <div className="flex justify-center items-center ml-4 w-[18px] h-[18px] bg-red-400 rounded-full text-white text-[12px]">
                                { isNewMessage }
                                </div>
                                : ''
                            }
                        </div>
                    <div 
                    className="text-xl h-fit flex items-center bg-orange-500 text-white px-5 py-2 rounded-md cursor-pointer"
                    onClick={e => {
                        dispatch(turnOnappoinetmentFillupPopup())
                    }}
                    >
                        Create Treatment
                    </div>
                </div>
            </div>
            <Main data={{name, dob}} />
            <Details
                props={{
                    address,
                    dob,
                    age,
                    blood_group,
                    email,
                    gender,
                    phone,
                    place,
                }}
            />
            <Appointments />
            <Id />
            <Notes />
            <Family />
        </div>
    );
}

export default Profile