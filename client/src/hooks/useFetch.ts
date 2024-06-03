import { useEffect } from "react"
import { useStoreGet } from "./useStore"

export const useFetchRefreshToken = () => {
    const token = useStoreGet()

    useEffect(() => {
        const callApi = async() => {
            const name = 'sus'
            const password = 'dicksmemes'

            const response = await fetch(`http://localhost:2000/patient-service/actions/get?name=${name}&password=${password}`, {
                headers: {
                    "Authentication": typeof token === 'string' ? token : ''
                }
            })
    
            const json = await response.json()
        }

        callApi()
    }, [])
}