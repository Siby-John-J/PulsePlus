import { AppointType } from "../types/appoientTypes"
import { useStoreGet } from "./useStore"

export const useFetchUpdateStatus = async (payload: AppointType, status: string) => {
    const token = useStoreGet()

    console.log(payload, status);
    
    
    // const response = await fetch(`http://localhost:2000/admin-service/appointment/change_status?status=${status}`, {
    //     headers: {
    //         "Authorization": 'Bearer ' + token
    //     },
    //     body: JSON.stringify(payload)
    // })
    
    // return await response.json()
}