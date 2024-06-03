import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

function swtichLogin(e: any) {
    
}

function Login() {
    return (
        <div className="w-[40vw] h-[auto] flex items-center justify-center">
            <LoginInput />
        </div>
    );
}

function LoginInput() {
    return (
        <div className="w-[69%] h-[80%] flex flex-col">
            <LoginOption />
            <LoginField />
        </div>
    );
}

function LoginField() {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    return (
        <div className="bg-white w-[100%] h-[80%] q8 items-center flex flex-col mt-8 rounded-xl shadow-xl">
            <div className="text-left w-full mt-2">
                <h1 className="text-[20px] font-medium pl-9 text-emerald-600">
                    Login as User
                </h1>
            </div>
            <div className="flex flex-col w-[90%] mt-5">
                <div className="">
                    <p>Email id or Username</p>
                    <input
                        type="text"
                        className="h-[2.4em] w-[100%] outline-none border-b-2 border-black"
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <div className="mt-4">
                    <p>Password</p>
                    <input
                        type="password"
                        className="h-[2.4em] w-[100%] outline-none border-b-2 border-black"
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className="flex flex-col text-center items-center mt-6">
                    <button className="h-[2.5em] text-white bg-emerald-600 rounded-2xl w-[60%]"
                        onClick={e => {
                            useLogin(username, password)
                        }}>
                        {/* <Link to={'/patient/profile'}>Login</Link> */}
                        <Link to={"/patient/profile"}>Login</Link>
                    </button>
                    <a className="mt-2">Forgot Password?</a>
                </div>
            </div>
        </div>
    );
}

function LoginOption() {
    return (
        <div className="bg-white w-[100%] h-28 items-center flex flex-row rounded-xl shadow-xl">
            <div className="px-6">
                <div className="bg-black w-20 h-20 rounded-full"></div>
            </div>
            <div className="px-0">
                <h1 className="font-semibold text-xl">Login As Doctor</h1>
                <p className="font-medium text-[14px] py-1">
                    Not an account please
                    <Link className="text-blue-600" to={"/register"}>
                        {" "}
                        <tr /> register
                    </Link>
                </p>
            </div>
            <div className="bg-black h-[100%] w-[2em] ml-9" onClick={swtichLogin}></div>
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

export default Login
