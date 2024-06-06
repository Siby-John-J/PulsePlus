import { useState } from "react";
import STimg from "../../Icons/st";
import LoginBannerIcon from "../../Icons/login";

function Auth({children}:any) {
    const [isLogin, setIsLogin] = useState<boolean>(true);
    
    return (
        <div className="flex flex-row h-[80vh] rounded-lg shadow-lg bg-emerald-400">
            <div className="w-[40vw] h-[auto] flex flex-col justify-center items-center">
                <STimg />
                <LoginText />
                {
                    children[1].type()
                }
            </div>
            <div className="flex flex-row h-[80vh] rounded-lg bg-emerald-400">
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
            <h1 className="font-bold text-2xl">WELCOME TO HOESPITAL</h1>
            <p>
                sus yoz are waiting for yuh this is something what you aware
                about
            </p>
        </div>
    );
}

export default Auth;
