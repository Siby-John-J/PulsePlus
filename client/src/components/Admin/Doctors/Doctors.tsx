import DoctorListHeader from "./DoctorListHeader"
import DoctorListContents from "./DoctorListContents"

function Doctors() {
  return (
    <div className='bg-gray-50 w-[80%] h-full'>
        <DoctorListHeader />
        <DoctorListContents />
    </div>
  )
}

export default Doctors