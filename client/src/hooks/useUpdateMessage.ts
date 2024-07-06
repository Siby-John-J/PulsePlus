import { AppointType } from "../types/appoientTypes"
import { useStoreGet } from "./useStore"

export const useFetchUpdateStatus = async (payload: AppointType, status: string) => {
    const token = useStoreGet()
    
    const response = await fetch(`http://localhost:2000/admin-service/appointment/change_status?status=${status}`, {
        method: 'put',
        headers: {
            "Authorization": 'Bearer ' + token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
    
    return await response.json()
}