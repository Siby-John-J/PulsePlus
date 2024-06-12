import { useNavigate } from "react-router"
import { detailsTypes } from "../../../types/patient/patientTypes"

function PatientData(props: { data: detailsTypes }) {
    const navigate = useNavigate()
    const { name, age, phone, _id, blood_group } = props.data

    return (
      <>
        <tr className="bg-gray-800 text-white rounded-md cursor-pointer h-[4em] hover:scale-105 hover:transition-transform"
          onClick={e => navigate(`/admin/patient/${_id}`)}>
          <td className="px-7">
              <PatientProfileModel name={name} /> 
          </td>
          <td className="px-7">{_id}</td>
          <td className="px-7">{blood_group}</td>
          <td className="px-7">{phone}</td>
          <td className="px-7">{age}</td>
        </tr>
        <br />
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