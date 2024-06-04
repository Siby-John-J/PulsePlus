import { useEffect } from "react"
import { useStoreGet } from "./useStore"
import { authType } from "../types/sliceTypes"
import { UseDispatch, useDispatch } from "react-redux"
import { get } from "../redux/slices/patient/patientDataSlice"

export const useFetchRefreshToken = (payload: authType) => {
    const dispatch = useDispatch()
    const { name, password } = payload
    const token = useStoreGet()

    useEffect(() => {
        const callApi = async() => {
            const response = await fetch(`http://localhost:2000/patient-service/actions/get?name=${name}&password=${password}`, {
                headers: {
                    "Authentication": typeof token === 'string' ? token : ''
                }
            })

            const json = await response.json()
            dispatch(get(json))
        }

        callApi()
        
    }, [])
}