import { extraSignUpType, signInType, signUpType } from "../types/authTypes";
import { responseType } from "../types/responseType";
import { useStoreGet } from "./useStore";

export const useSignup = async (payload: signUpType | signUpType & extraSignUpType, role: string) => {    
    const response = await fetch(`http://localhost:2000/sign_up?q=${role}`, {
        method: "post",
        headers: {
            "Authorization": "08ac399a9b2ff2d0027fa53f7eb783a19b52",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    return await response.json()
};

export const useGettoken = async (payload: signInType, role: string): Promise<responseType> => {
    const { name, ...rest } = payload
    const response = await fetch(`http://localhost:2000/get_token?q=${role}`, {
        method: "post",
        headers: {
            "Authorization": "b1fc724a4e201b53669c1cdb727c9a24bc3c",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: name,
            ...rest
        }),
    });

    return await response.json();
}

export const useLogout = async (payload: signInType): Promise<responseType | any> => {
    const token = useStoreGet()
    
    // need to change the role
    const response = await fetch("http://localhost:2000/auth-service/authH/logout?q=patient", {
        method: "post",
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });


    return await response.json();
}
