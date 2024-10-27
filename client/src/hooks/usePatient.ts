import { detailsTypes, patientTypes } from "../types/patient/patientTypes";
import { responseType } from "../types/responseType";
import { useStoreGet } from "./useStore";

export const usePatientUpdate = async (payload: any, query: object): Promise<responseType | detailsTypes> => {
    const token = useStoreGet()
    
    const response = await fetch("http://localhost:2000/patient-service/actions/update", {
        method: "post",
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({payload, query}),
    });

    return await response.json();
}

export const useFetchPostTemplate = async(url: string, payload: any, isForm = false) => {
    const token = useStoreGet()

    try {
        const response = await fetch(url, {
            cache: 'no-cache',
            mode: 'cors',
            credentials: 'same-origin',
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            method: 'post',
            headers: {
                "Authorization": "Bearer " + token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        })
        
        return await response.json()
    } catch (error) {
        return await error
    }
}

export const useFetchGetTemplate = async(url: string) => {
    const token = useStoreGet()

    try {
        const response = await fetch(url, {
            method: 'get',
            headers: {
                "Authorization": "Bearer " + token
            },
        })
        
        return await response.json()
    } catch (error) {
        return await error
    }
}

export const useFetchDeleteTemplate = async(url: string) => {
    const token = useStoreGet()

    try {
        const response = await fetch(url, {
            method: 'delete',
            headers: {
                "Authorization": "Bearer " + token
            },
        })
        
        return await response.json()
    } catch (error) {
        return await error
    }
}

export const useFetchPutTemplate = async(url: string, payload: any) => {
    const token = useStoreGet()

    try {
        const response = await fetch(url, {
            method: 'put',
            headers: {
                "Authorization": "Bearer " + token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        })
        
        return await response.json()
    } catch (error) {
        return await error
    }
}

// Must be like 
// let POST = 'http://localhost:2000/doctor-service/auth/'
