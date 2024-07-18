import { useRef, useState } from "react";
import resiterBannerIcon from "../../../public/register-banner.svg";
import "./register.css";
import { extraSignUpType, signUpType } from "../../types/authTypes";
import { useSignup } from "../../hooks/useAuth";
import { LoginBanner, LoginText } from "./Auth";
import STimg from "../../Icons/st";
import { useDispatch, useSelector } from "react-redux";
import { setRole } from "../../redux/slices/authRoleSlice";
import { setExModel } from "../../redux/slices/accountExistsSlice";
import { on } from "../../redux/slices/patient/layoutSlice";

export function Register({ children }: any) {
    const role = useSelector((state: any) => state).authRoleReducer.role

    const ss1 = " bg-emerald-400"
    const ss2 = " bg-orange-400"

    const s1 = "flex flex-row h-[80vh] rounded-lg shadow-lg"
    const s2 = "flex flex-row h-[80vh] rounded-lg"
    
    return (
        <div className={role === 'Doctor' ? s1 + ss1 : s1 + ss2}>
            <div className="w-[40vw] h-[auto] flex flex-col justify-center items-center">
                <STimg />
                <LoginText />
                {children[1].type()}
            </div>
            <div className={role === 'Doctor' ? s2 + ss1 : s2 + ss2}>
                {children[0].type()}
            </div>
        </div>
    );
}

function RegisterForm() {
    const role = useSelector((state: any) => state).authRoleReducer.role
    const dispatch = useDispatch<any>()

    const [loginData, setLoginData] = useState<signUpType>({
        name: "",
        email: "",
        password: "",
        phone: 0,
    })

    const [extraData, setExtraData] = useState<extraSignUpType>({
        degree: "",
        department: ""
    })

    const refreshData = () => {
        setLoginData({email: "", name: "", password: "", phone: 0})
        setExtraData({degree: "", department: ""})
    }

    const changeInput = (event: any, field: string) => {
        if(field === 'degree' || field === 'department') {
            setExtraData((e: any) => {
                e[field] = event.target.value;
                return e;
            })
        } else {
            setLoginData((e: any) => {
                e[field] = event.target.value;
                return e;
            });
        }
    };

    const handleError = (message: string) => {
        if(message === 'account already exists') {
            dispatch(on())
            dispatch(setExModel())
        }
    }

    const createAccount = async () => {
        if(role === 'Doctor') {
            refreshData()
            const payload = { ...loginData, ...extraData }
            const res = await useSignup(payload, role.toLowerCase())
            if(res.error) handleError(res.error)
        } else {
            useSignup(loginData, role.toLowerCase())
        }
    }

    return (
        <div className="w-[40vw] h-[100%] flex items-center justify-center">
            <div className="h-[90%] w-[70%]">
                <div className="">
                    <h1 className="text-2xl font-medium">
                        {"Register new Account for " + role}
                    </h1>
                    <div className="pt-5">
                        <input
                            onChange={e => {
                                dispatch(setRole({role: 'Patient'}))
                            }}
                            checked={role === 'Patient' ? true: false}
                            className="w-5 h-5"
                            type="radio"
                            name=""
                            id=""
                        />
                        <input
                            onChange={e => {
                                dispatch(setRole({role: 'Doctor'}))
                            }}
                            checked={role === 'Doctor' ? true: false}
                            className="ml-8 w-5 h-5"
                            type="radio"
                            name=""
                            id=""
                        />
                    </div>
                </div>
                <form
                    className="w-[100%] h-[80%] flex flex-col justify-evenly"
                    onSubmit={e => {
                        createAccount()
                        e.preventDefault()
                    }}
                >
                    <div>
                        <h1 className="mb-2">Fullname</h1>
                        <input
                            type="text"
                            onChange={(e) => changeInput(e, "name")}
                        />
                    </div>
                    <div>
                        <h1 className="mb-2">E-mail</h1>
                        <input
                            type="email"
                            onChange={(e) => changeInput(e, "email")}
                        />
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="w-[48%]">
                            <h1 className="mb-2">Password</h1>
                            <input
                                type="password"
                                onChange={(e) => changeInput(e, "password")}
                            />
                        </div>
                        <div className="w-[48%]">
                            <h1 className="mb-2">Config-Password</h1>
                            <input type="password" />
                        </div>
                    </div>

                    {
                        role === 'Doctor' &&
                        <div className="flex flex-row justify-between">
                            <div className="w-[48%]">
                                <h1 className="mb-2">Degree</h1>
                                <input
                                    type="text"
                                    onChange={(e) => changeInput(e, "degree")}
                                />
                            </div>
                            <div className="w-[48%]">
                                <h1 className="mb-2">Department</h1>
                                <input 
                                    type="text"
                                    onChange={(e) => changeInput(e, "department")}
                                />
                            </div>
                        </div>
                    }

                    <div>
                        <h1 className="mb-2">Phone</h1>
                        <input
                            type="number"
                            onChange={(e) => changeInput(e, "phone")}
                        />
                    </div>
                    <div className="flex flex-row justify-between text-md text-white font-medium mt-5">
                        <button
                            type="submit"
                            className="h-[2.3em] w-[48%] rounded-md bg-black"
                        >
                            Create
                        </button>
                        <button className="h-[2.3em] w-[48%] rounded-md border-[2px] text-black border-black">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export function RegisterBanner() {
    return (
        <>
            {/* <p>niggas are weeks</p> */}
            <img src={resiterBannerIcon} alt="" className="w-[60%]" />
        </>
    );
}

export default RegisterForm;
