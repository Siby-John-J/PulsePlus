import { useEffect } from "react"
import { useStoreGet, useStoreSet } from "./useStore"
import { authType } from "../types/sliceTypes"
import { useDispatch, useSelector } from "react-redux"
import { get } from "../redux/slices/patient/patientDataSlice"
import { useNavigate } from "react-router"

export const useFetchRefreshToken = (payload: authType) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { name, password } = payload
    const token = useStoreGet()
    
    useEffect(() => {
        fetch(`http://localhost:2000/patient-service/actions/get?name=${name}&password=${password}`, {
            headers: {
                "Authorization": 'Bearer ' + token
            }
        })
            .then(res => res.json())
            .then((data: any) => {
                console.log(data, ' from fetch');
                
                if(data.accessToken) {
                    if(data.accessToken === 'token not found') {
                        // dispatch()
                        navigate('/')
                    }
                    useStoreSet(data.accessToken)
                } else {
                    dispatch(get(data))
                }
            })
            .catch(error => {
                // console.log(error)
                navigate('/')
                
            })
            // 
    }, [])
}