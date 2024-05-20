import PatientAppoinements from "./PatientAppoinements"
import PatientDetails from "./PatientDetails"

function SinglePatient() {
  return (
    <div className="bg-blue-100 w-[80%] flex items-center justify-center flex-col">
        <div className="h-[100%] w-[100%] px-3 py-7">
            <div className="w-[98%] h-[25%] flex flex-row justify-between px-6">
                <PatientDetails />
            </div>
            <div className="flex flex-col w-[98%] h-[75%] pt-6">
                <PatientAppoinements />
            </div>
        </div>
            
    </div>
  )
}

export default SinglePatient