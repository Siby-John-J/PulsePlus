import { useNavigate } from "react-router"

function PatientData() {
    const navigate = useNavigate()
  return (
    <>
      <tr className="bg-gray-800 text-white rounded-md cursor-pointer h-[4em] hover:scale-105 hover:transition-transform"
        onClick={e => navigate('/admin/patient/romy')}>
        <td className="px-7">
            <PatientProfileModel /> 
        </td>
        <td className="px-7">Tx-3434k</td>
        <td className="px-7">O+ve</td>
        <td className="px-7">+1 2329090</td>
        <td className="px-7">23</td>
      </tr>
      <br />
    </>
  )
}

function PatientProfileModel() {
    return (
        <div className="h-[3em] flex flex-row items-center justify-start">
            <div className="bg-black h-[100%] min-w-[3em] rounded-md"></div>
            <h1 className="text-md ml-3">romy</h1>
        </div>
    )
}

export default PatientData