import { useNavigate } from "react-router"
import { detailsTypes } from "../../../types/patient/patientTypes"

function PatientData(props: { data: detailsTypes }) {
    const navigate = useNavigate()
    const { name, age, phone, _id } = props.data

    return (
      <>
        <tr
          className="bg-white text-black cursor-pointer h-[4em] hover:scale-105 hover:transition-transform hover:bg-blue-500 hover:text-white"
          onClick={e => navigate(`/admin/patient/${name}`)}>
          <td className="px-7">
              <PatientProfileModel name={name} /> 
          </td>
          <td className="px-7">{_id}</td>
          <td className="px-7">
            <div className="bg-green-400 py-1 rounded-md text-white text-center">
              {'Active'}
            </div>
          </td>
          <td className="px-7">{phone}</td>
          <td className="px-7">{ age }</td>
        </tr>
      </>
    )
}

function PatientProfileModel(props: { name: string }) {
    const { name } = props

    return (
        <div className="h-[3em] flex flex-row items-center justify-start">
            <div className="bg-black h-[100%] min-w-[3em] rounded-md"></div>
            <h1 className="text-md ml-3">{name}</h1>
        </div>
    )
}

export default PatientData