import { signInType, signUpType } from "../types/authTypes";
import { responseType } from "../types/responseType";

export const useSignup = async (payload: signUpType) => {
    const response = await fetch("http://localhost:2000/data", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    const json = await response.json();
    console.log(json);
};

export const useSignin = async (payload: signInType): Promise<responseType> => {    
    const response = await fetch("http://localhost:2000/get_token", {
        method: "post",
        headers: {
            "Authorization": "ijcidfj3jfmf09dfu0e9um0fec",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    return await response.json();
}
