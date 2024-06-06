import { signInType, signUpType } from "../types/authTypes";
import { responseType } from "../types/responseType";
import { useStoreGet } from "./useStore";

export const useSignup = async (payload: signUpType) => {
    const response = await fetch("http://localhost:2000/sign_up?q=patient", {
        method: "post",
        headers: {
            "Authorization": "08ac399a9b2ff2d0027fa53f7eb783a19b52",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    const json = await response.json();
    console.log(json);
};

export const useGettoken = async (payload: signInType): Promise<responseType> => {    
    const response = await fetch("http://localhost:2000/get_token?q=patient", {
        method: "post",
        headers: {
            "Authorization": "b1fc724a4e201b53669c1cdb727c9a24bc3c",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    return await response.json();
}

export const useLogout = async (payload: signInType): Promise<responseType> => {
    const token = useStoreGet()
    
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
