import { useParams } from 'react-router-dom'
import PatientDetailsHeader from './PatientDetailsHeader'
import PatientDetailBody from './PatientDetailBody'

function PatientDetails() {
  const name = useParams()

  return (
    <div className='bg-gray-50 h-[100%] w-[80%]'>
      <PatientDetailsHeader />
      <PatientDetailBody />
    </div>
  )
}

export default PatientDetails