import PatientData from "./PatientData"
import PatientTitle from "./PatientTitle"


function Patients() {
  return (
    <div className="bg-gray-100 w-[80%] flex justify-center items-start py-10">
      <table className="w-[90%] gap-y-3 rounded-md">
        <PatientTitle />
        <PatientData />
        <PatientData />
      </table>
    </div>
  )
}

export default Patients