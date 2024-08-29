import { UserTemplate } from "../Dashboard/DoctorMiniList"
import { UserTemplateStyle } from "../../../types/hardcoded/styleEnum"
import { useEffect, useState } from "react"
import { useFetchGetTemplate } from "../../../hooks/usePatient"

async function getAndsetData() {
  const response = await useFetchGetTemplate('http://localhost:2000/doctor-service/auth/getAll')
  return response
}

function DoctorListContents() {
  const [doctors, setDoctors] = useState([])
  
  useEffect(() => {
    getAndsetData().then(response => setDoctors(response))
  }, [])

  return (
    <div className='w-full grid grid-cols-10 grid-rows-6 h-[85%] gap-3'>
      {
        doctors.map(data => {
          return (
            <SingleContent data={data} style={'col-span-2 row-span-3'} />
          )
        })
      }
    </div>
  )
} 

function SingleContent(props: any) {
  const style = props.style
  const { degree, department, name,_id } = props.data
  const { COLUMN } =  UserTemplateStyle

  return (
    <div className={"rounded-2xl flex flex-col items-center bg-white shadow-xl justify-between py-5 " + style}>
      <div className='doctorTemp'>
        <UserTemplate details={{name: name, details: degree, mainStyle: COLUMN}} />
      </div>
      <div className="z-30 mt-3">
        <h1 className="font-medium bg-blue-100 px-6 py-1 rounded-md text-blue-600">{department}</h1>
      </div>
      <div className="bg-gray-200 w-full py-[0.4em] text-center">
        <button
          onClick={e => {
            console.log(_id);
            
          }}
          className="font-medium text-lg text-gray-500">View</button>
      </div>
    </div>
  )
}

export default DoctorListContents
