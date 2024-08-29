import { useEffect, useRef, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./animation.css";
import { useDispatch, useSelector } from "react-redux";
import { useLogout } from "../../hooks/useAuth";
import { authReducerType } from "../../types/sliceTypes";
import { logout } from "../../redux/slices/authSlice";
import {PatientModelLoader} from "../ModelLoader";
import { useStoreDelete } from "../../hooks/useStore";
import { get } from "../../redux/slices/patient/patientDataSlice";
import { io } from "socket.io-client";
import { Peer } from "../../webRTC/peer";
import { callOn } from "../../redux/slices/callSlice";
import { inComingcallOn } from "../../redux/slices/incomingSlice";
const socket = io('http://localhost:3003/signaling')

function Patient() {
    const [style, setStyle] = useState<string>(
        "options bg-orange-500 w-[80%] py-[1.3em] text-xl rounded-lg cursor-pointer"
    );
    const navigate = useNavigate();
    const authState = useSelector((state: authReducerType) => state);
    const state: any= useSelector((state: any) => state).patientReducer
    const countRef = useRef(0)

    const dispatch = useDispatch();

    useEffect(() => {
        socket.on('offer_to_patient', (data: any) => {
            console.log(data.senderId, authState.authReducer.id)
            
            if(data.senderId === authState.authReducer.id) {
                if(countRef.current === 0) dispatch(inComingcallOn({offer: data.offer}))
                countRef.current++
            }
        })
    }, []);

    const handleLogout = async() => {
        dispatch(logout());
        const res = await useLogout(authState.authReducer)
        
        useStoreDelete()

        navigate("/");
    };

    return (
        <>
            <PatientModelLoader />
            <div className="patient w-[100%] h-[100%] text-white flex flex-row bg-slate-100">
                <div className="bg-slate-700 w-[20vw] flex flex-col justify-evenly text-center items-center">
                    <div className="flex flex-col h-[90%] w-[100%] justify-evenly text-center items-center">
                        <h1 className={style}>
                            <Link to="/patient/profile">Profile</Link>
                        </h1>
                        <h1 className={style}>
                            <Link to="/patient/chat">Chat</Link>
                        </h1>
                        <h1 className={style}>
                            <Link to="/patient/surgery">Surgery</Link>
                        </h1>
                        <h1 className={style}>
                            <Link to="/patient/billing">Billing</Link>
                        </h1>
                    </div>
                    <div className=" h-[10%] flex px-10 items-center w-[100%]">
                        <button
                            className=" px-7 py-2 rounded-lg"
                            onClick={handleLogout}
                        >
                            LogOut
                        </button>
                    </div>
                </div>
                <Outlet />
            </div>
        </>
    );
}

export default Patient;
