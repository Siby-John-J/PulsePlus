import { useEffect, useState } from "react"
import PatientData from "./PatientData"
import PatientTitle from "./PatientTitle"
import { useFetchGetTemplate } from "../../../hooks/usePatient"
import { detailsTypes } from "../../../types/patient/patientTypes"

function Patients() {
  const [patients, setPatients] = useState<detailsTypes[]>([
    { name:'niga', age: 34, phone: '233', _id: '34', blood_group: 'ji' },
    { name:'niga', age: 34, phone: '233', _id: '34', blood_group: 'ji' },
    { name:'niga', age: 34, phone: '233', _id: '34', blood_group: 'ji' },
    { name:'niga', age: 34, phone: '233', _id: '34', blood_group: 'ji' },

  ])

  // useEffect(() => {
  //   const response = useFetchGetTemplate('http://localhost:2000/patient-service/actions/getall')
  //   response.then(res => {
  //     setPatients(res)      
  //   })
  // }, [])

  return (
    <div className="bg-gray-200 w-[80%] flex justify-center items-start py-10">
      <table className="w-[90%] gap-y-3 rounded-md">
        <PatientTitle />
        {
          patients.map((patient: any) => {
            return (
              <PatientData data={patient} />
            )
          })
        }
      </table>
    </div>
  )
}

export default Patients