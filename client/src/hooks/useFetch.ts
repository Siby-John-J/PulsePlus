import { useEffect } from "react"
import { useStoreGet } from "./useStore"
import { authType } from "../types/sliceTypes"
import { useDispatch, useSelector } from "react-redux"
import { get } from "../redux/slices/patient/patientDataSlice"

export const useFetchRefreshToken = (payload: authType) => {
    const dispatch = useDispatch()

    const { name, password } = payload
    const token = useStoreGet()
    // 

    useEffect(() => {
        fetch(`http://localhost:2000/patient-service/actions/get?name=${name}&password=${password}`, {
            headers: {
                "Authentication": typeof token === 'string' ? token : ''
            }
        })
            .then(res => res.json())
            .then(data => dispatch(get(data)))
            // 
    }, [])
}