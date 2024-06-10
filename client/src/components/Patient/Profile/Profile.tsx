import { useEffect } from "react";
import { turnOnappoinetmentFillupPopup } from "../../../redux/slices/patient/appointmentFillup";
import { get } from "../../../redux/slices/patient/patientDataSlice";
import { useFetchRefreshToken } from "../../../hooks/useFetch";
import { useGettoken } from "../../../hooks/useAuth";
import { useStoreSet } from "../../../hooks/useStore";
import { authReducerType } from "../../../types/sliceTypes";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { patientDetailsReducerType } from "../../../types/patient/patientTypes";
import Main from "./Main";
import Details from "./Details";
import Appointments from "./Appoinetments";
import Id from "./Id";
import Notes from "./Notes";
import Family from "./Family";

function Profile() {
    const navigate = useNavigate()
    const auth = useSelector((state: authReducerType) => state.authReducer);
    const dispatch = useDispatch()
    const patientDetailsState = useSelector(
        (state: patientDetailsReducerType) => state.patientReducer
    );

    const authentication = async() => {
        const response = await useFetchRefreshToken(auth)
                
        if(response.accessToken === 'token not found' && auth.auth) {
            const res = await useGettoken(auth)
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
        // authentication()
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
                <div 
                className="text-xl flex items-center bg-orange-500 text-white px-4 rounded-md cursor-pointer"
                onClick={e => {
                    dispatch(turnOnappoinetmentFillupPopup())
                }}
                >
                    Create Treatment
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