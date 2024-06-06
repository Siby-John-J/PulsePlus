import { useState } from "react";
import resiterBannerIcon from "../../../public/register-banner.svg";
import "./register.css";
import { signUpType } from "../../types/authTypes";
import { useSignup } from "../../hooks/useAuth";
import { LoginBanner, LoginText } from "./Auth";
import STimg from "../../Icons/st";

export function Register({ children }: any) {
    return (
        <div className="flex flex-row h-[80vh] rounded-lg shadow-lg bg-emerald-400">
            <div className="w-[40vw] h-[auto] flex flex-col justify-center items-center">
                <STimg />
                <LoginText />
                {children[1].type()}
            </div>
            <div className="flex flex-row h-[80vh] rounded-lg bg-emerald-400">
                {children[0].type()}
            </div>
        </div>
    );
}

function RegisterForm() {
    const [loginData, setLoginData] = useState<signUpType>({
        name: "",
        email: "",
        password: "",
        phone: 0,
    });

    const changeInput = (event: any, field: string) => {
        setLoginData((e: any) => {
            e[field] = event.target.value;
            return e;
        });
    };

    return (
        <div className="w-[40vw] h-[100%] flex items-center justify-center">
            <div className="h-[90%] w-[70%]">
                <div className="">
                    <h1 className="text-2xl font-medium">
                        Register new Account
                    </h1>
                    <div className="pt-5">
                        <input
                            checked
                            className="w-5 h-5"
                            type="radio"
                            name=""
                            id=""
                        />
                        <input
                            className="ml-8 w-5 h-5"
                            type="radio"
                            name=""
                            id=""
                        />
                    </div>
                </div>
                <form
                    className="w-[100%] h-[80%] flex flex-col justify-evenly"
                    onSubmit={(e) => {
                        useSignup(loginData);
                        e.preventDefault();
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
