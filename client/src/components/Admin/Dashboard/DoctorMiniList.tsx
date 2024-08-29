import { Link } from "react-router-dom"
import { UserTemplateStyle } from "../../../types/hardcoded/styleEnum"
import { useEffect, useState } from "react"
import { useFetchGetTemplate } from "../../../hooks/usePatient"

function DoctorMiniList() {
  const [doctors, setDoctors] = useState([])

  async function getAndStoreData() {
    const response = await useFetchGetTemplate('http://localhost:2000/doctor-service/auth/getAll?limit=true')
    setDoctors(response)
  }

  useEffect(() => {
    // getAndStoreData()
  }, [])

  return (
    <div className="w-[100%] h-[50%] rounded-md border-black border-[1px]">
      <div className="flex flex-row justify-between  py-2 px-3">
        <h1 className="font-semibold text-lg">Doctors list</h1>
        <Link to={'/admin/doctors'}>
          <p className="text-md font-normal text-blue-700">View All</p>
        </Link>
      </div>
      <div className="flex flex-col items-center pt-2">
        {
          doctors.map((item: any) => <DoctorList data={item} /> )
        }
        <DoctorList />
      </div>
    </div>
  )
}

export function UserTemplate(data: any) {
  const { name, details, style, mainStyle } = data.details

  return (
    <div className={mainStyle}>
      <div className="bg-black h-[2.5em] w-[2.5em] rounded-full"></div>
      <div className="flex flex-col text-[14px] justify-center">
        <h1 className="font-semibold">{name}</h1>
        <p className={style}>{details}</p>
      </div>
    </div>
  )
}

function DoctorList(props: any) {
  const {  } = props
  const { ROW } =  UserTemplateStyle
  
  return (
    <div className="py-3 w-[90%] h-[3.5em] flex flex-row justify-between items-center px-2 border-gray-500 border-b-[1px]  pb-3">
      <UserTemplate details={{name: 'Dr Siby John', details: 'nenes', style: 'text-[12px]', mainStyle: ROW}} />
      <div className="text-[12px] font-semibold text-green-400">Available</div>
    </div>
  )
}

export default DoctorMiniList