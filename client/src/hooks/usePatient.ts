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

export const useFetchPostTemplate = async(url: string, payload: any) => {
    const token = useStoreGet()

    try {
        const response = await fetch(url, {
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