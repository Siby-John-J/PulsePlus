import { useNavigate } from "react-router-dom"

function PatientListBody() {
  return (
    <div className="w-[100%] h-[75%] flex justify-center">
        <div className=" w-[90%]">
            <table className="w-[100%]">
                <PatientListTableTitle />  
                <PatientListTableBody />
            </table>
        </div>
        <div className="absolute top-[84%] z-10">
            <EditModel />    
        </div>
    </div>
  )
}

function EditModel() {
    return (
        <div className="bg-blue-600 rounded-md h-[2em] w-[19em] flex flex-row justify-evenly text-white items-center py-5">
            <h1>2 selected</h1>
            <h1>D</h1>
            <ToggleButton />
        </div>
    )
}

export function ToggleButton() {
    return (
        <div className="rounded-full bg-blue-200 h-[1.8em] w-[18%] flex items-center cursor-pointer">
            <div className="toggle-btn rounded-full bg-blue-400 h-[1.6em] w-[1.6em] mx-1"></div>
        </div>
    )
}

function PatientListTableTitle() {
    return (
        <tr className="bg-gray-300 h-[2em]">
            {/* <th className="text-left font-bold text-[12px]">
                <input type="checkbox" className="ml-4" />
            </th> */}
            <th className="text-left font-bold text-[12px]">NAME</th>
            <th className="text-left font-bold text-[12px]">#ID</th>
            <th className="text-left font-bold text-[12px]">STATUS</th>
            <th className="text-left font-bold text-[12px]">LAST VISIT</th>
            <th className="text-left font-bold text-[12px]">DIAGNOSIS</th>
        </tr>
    )
}

function PatientListTableBody() {
    const navigate = useNavigate()

    return (
        <tr className="h-[4em] hover:bg-gray-50 cursor-pointer border-b-[1px]" onClick={e => 
            navigate('/doctor/patients/siby')}>
            {/* <td>
                <input type="checkbox" className="ml-4" />
            </td> */}
            <td className="flex flex-row items-center mt-2 ml-0">
                    <div className="bg-black h-[2.3em] w-[2.3em] rounded-full"></div>
                    <div className="flex flex-col">
                        <p className="ml-2">siby</p>
                        {/* <p className="ml-2 text-[13px]">Next appoientmet 21.23.34</p> */}
                    </div>
            </td>
            <td className="font-light">#PD-FG34J</td>
            <td className="flex flex-row items-center bg-inherit">
                <div className="h-3 w-3 bg-blue-500 rounded-sm"></div>
                <p className="text-[14px] pl-3">New Patient</p>
            </td>
            <td>09/11/2000</td>
            <td className="text-[13px] font-semibold">PTSD</td>
        </tr>
    )
}

export default PatientListBody