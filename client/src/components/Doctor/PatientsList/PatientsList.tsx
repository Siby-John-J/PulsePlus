import PatientListBody from './PatientListBody'
import PatientListFooter from './PatientListFooter'
import PatientListHeader from './PatientListHeader'

function PatientsList() {
  return (
    <div className='w-[80%] h-[100%]'>
        <div className='w-[100%] h-[10%] flex items-center border-gray-300 border-b-[0.2px]'>
          <h1 className='text-2xl font-normal pl-11'>Patients</h1>
        </div>
        <div className='w-[100%] h-[90%] flex flex-col items-center'>
          <PatientListHeader />
          <PatientListBody />   
          <PatientListFooter />
        </div>
    </div>
  )
}

export default PatientsList