import { AppointType } from "../types/appoientTypes"
import { useStoreGet } from "./useStore"

export const useFetchUpdateStatus = async (payload: any, status: string): Promise<AppointType> => {
    const token = useStoreGet()
    let url
    
    if(payload.type === 'appointment') {
        url = `appointment/change_status?status=${status}`
    } else if(payload.type === 'register') {
        url = `validation/change_status?status=${status}`
    }
    
    const  { type, ...rest } = payload

    const response = await fetch(`http://localhost:2000/admin-service/${url}`, {
        method: 'put',
        headers: {
            "Authorization": 'Bearer ' + token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(rest)
    })
    
    return await response.json()
}

export const useAddAppointment = async (payload: AppointType): Promise<boolean> => {
    const token = useStoreGet()
    
    const response = await fetch(`http://localhost:2000/admin-service/appointment/create`, {
        method: 'post',
        headers: {
            "Authorization": 'Bearer ' + token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
    
    return await response.json()
}