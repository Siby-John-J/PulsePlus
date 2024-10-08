import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInType } from "../../types/authTypes";
import { useGettoken } from "../../hooks/useAuth";
import { useStoreSet } from "../../hooks/useStore";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/slices/authSlice";
import { setRole } from "../../redux/slices/authRoleSlice";
import { setExModel } from "../../redux/slices/accountExistsSlice"
import { on } from "../../redux/slices/patient/layoutSlice";

function swtichLogin(e: any) {}

function Login() {
    return (
        <div className="w-[40vw] h-[auto] flex items-center justify-center">
            <LoginInput />
        </div>
    );
}

function LoginInput() {
    const [role, setRole] = useState('Patient')
    
    return (
        <div className="w-[69%] h-[80%] flex flex-col">
            <LoginOption />
            <LoginField />
        </div>
    );
}

function LoginField() {
    const naivate = useNavigate();
    const dispatch = useDispatch<any>()
    const role = useSelector((state: any) => state).authRoleReducer.role

    const sl = " text-emerald-600"
    const s2 = " text-orange-600"

    const ss1 = " bg-emerald-600"
    const ss2 = " bg-orange-600"

    const [signIndata, setSignInData] = useState<signInType>({
        name: "",
        password: "",
        auth: false
    });

    const changeInput = (event: any, field: string) => {
        setSignInData((e: any) => {
            e[field] = event.target.value;
            return e;
        });
    };

    const authValidate = async (event: any) => {
        const res = await useGettoken(signIndata, role.toLowerCase())
        console.log(res);
        
        if(res.error === 'user not found') {
            alert(res.error)
        } else if(res.error){
            return naivate('/processing')
        }
        
        if(res.accessToken) {
            setSignInData(e => {
                e.auth = true
                return e
            })
            
            dispatch(login({
                name: signIndata.name,
                password: signIndata.password,
                id: res.id,
                auth: true
            }));
            useStoreSet(res.accessToken);
            return naivate(`/${role.toLowerCase()}/dashboard`);
        }
    };

    return (
        <div className="bg-white w-[100%] h-[80%] q8 items-center flex flex-col mt-8 rounded-xl shadow-xl">
            <div className="text-left w-full mt-2">
                <h1 className={role === 'Doctor' ? sl + " text-[20px] font-medium pl-9 ": s2 + " text-[20px] font-medium pl-9 "}>
                    {'Login as ' + role}
                </h1>
            </div>
            <div className="flex flex-col w-[90%] mt-5">
                <div className="">
                    <p>Email id or Username</p>
                    <input
                        type="text"
                        className="h-[2.4em] w-[100%] outline-none border-b-2 border-black"
                        onChange={(e) => changeInput(e, "name")}
                    />
                </div>
                <div className="mt-4">
                    <p>Password</p>
                    <input
                        type="password"
                        className="h-[2.4em] w-[100%] outline-none border-b-2 border-black"
                        onChange={(e) => changeInput(e, "password")}
                    />
                </div>
                <div className="flex flex-col text-center items-center mt-6">
                    <button
                        className={role === 'Doctor' ? ss1 + " h-[2.5em] text-white rounded-2xl w-[60%]" : 
                            ss2 + " h-[2.5em] text-white rounded-2xl w-[60%]"
                        }
                        onClick={(e) => {
                            authValidate(e)
                        }}
                    >
                        Login
                        {/* <Link to={'/patient/profile'}>Login</Link> */}
                        {/* <Link to={"/admin/dashboard"}>Login</Link> */}
                    </button>
                    <a className="mt-2">Forgot Password?</a>
                </div>
            </div>
        </div>
    );
}

function LoginOption() {
    const dispatch = useDispatch()
    const role = useSelector((state: any) => state).authRoleReducer.role
    

    return (
        <div className="bg-white w-[100%] h-28 items-center flex flex-row rounded-xl shadow-xl">
            <div className="px-6">
                <div className="bg-black w-20 h-20 rounded-full"></div>
            </div>
            <div className="px-0">
                <h1 className="font-semibold text-xl">{'Login As ' + role }</h1>
                <p className="font-medium text-[14px] py-1">
                    Not an account please
                    <Link className="text-blue-600" to={"/register"}>
                        {" "}
                        <tr /> register
                    </Link>
                </p>
            </div>
            <div
                className="bg-black h-[100%] w-[2em] ml-9"
                onClick={e => {
                    if(role === 'Patient') {
                        dispatch(setRole({role: 'Doctor'}))
                    } else {
                        dispatch(setRole({role: 'Patient'}))
                    }
                }}
            ></div>
        </div>
    );
}

function LoginBG() {
    return (
        <div className="absolute">
            <div className="absolute top-52 right-[-70px] bg-red-500 rounded-full w-[10em] h-[10em]"></div>
            <div className="absolute bg-emerald-600 w-[60em] h-3"></div>
        </div>
    );
}

export default Login;
