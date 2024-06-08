import { useStoreGet, useStoreSet } from "./useStore"
import { authType } from "../types/sliceTypes"

export const useFetchRefreshToken = async (payload: authType) => {
    const { name, password } = payload
    const token = useStoreGet()
    
    const response = await fetch(`http://localhost:2000/patient-service/actions/get?name=${name}&password=${password}`, {
        headers: {
            "Authorization": 'Bearer ' + token
        }
    })
    
    return await response.json()
}