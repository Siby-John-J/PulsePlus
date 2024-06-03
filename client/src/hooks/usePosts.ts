import { signInType, signUpType } from "../types/authTypes";
import { responseType } from "../types/responseType";

export const useSigup = async (payload: signUpType) => {
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

export const useSigin = async (payload: signInType): Promise<responseType> => {
    const response = await fetch("http://localhost:2000/data", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    return await response.json();
};
