import { useState } from "react";
import STimg from "../../Icons/st";
import LoginBannerIcon from "../../Icons/login";
import { useSelector } from "react-redux";

function Auth({children}:any) {
    const [isLogin, setIsLogin] = useState<boolean>(true);
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
                {
                    children[1].type()
                }
            </div>
            <div className={role === 'Doctor' ? s2 + ss1 : s2 + ss2}>
                {
                    children[0].type()
                }
            </div>
        </div>
    );
}

export function LoginBanner() {
    return (
            <LoginBannerIcon />
        // <div className="bg-black w-[30em] h-[20em]">
        // </div>
    )
}

export function LoginText() {
    return (
        <div className="pt-6 text-center">
            <h1 className="font-bold text-2xl">Welcome to PulsePlus</h1>
            <p>
                sus yoz are waiting for yuh this is something what you aware
                about
            </p>
        </div>
    );
}

export default Auth;
