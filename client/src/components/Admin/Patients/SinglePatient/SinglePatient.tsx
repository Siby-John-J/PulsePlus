import { useParams } from "react-router"
import PatientAppoinements from "./PatientAppoinements"
import PatientDetails from "./PatientDetails"
import { useEffect, useState } from "react"
import { useFetchGetTemplate } from "../../../../hooks/usePatient"
import { detailsTypes } from "../../../../types/patient/patientTypes"

function SinglePatient() {
  const param = useParams()
  const [patient, setPatient] = useState<detailsTypes>()

  useEffect(() => {
    // useFetchGetTemplate('http://localhost:2000/patient-service/actions/get').then(res => {
    //   setPatient(res)
      
    // })
  }, [])

  return (
    <div className="bg-blue-100 w-[80%] flex items-center justify-center flex-col">
        <div className="h-[100%] w-[100%] px-3 py-7">
            <div className="w-[98%] h-[25%] flex flex-row justify-between px-6">
                <PatientDetails id={param.id} />
            </div>
            <div className="flex flex-col w-[98%] h-[75%] pt-6">
                <PatientAppoinements />
            </div>
        </div>
            
    </div>
  )
}

export default SinglePatient