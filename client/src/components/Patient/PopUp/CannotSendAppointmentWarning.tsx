import React from 'react'
import { useDispatch } from 'react-redux'
import { turnOffnotSendAppoinetmentPopup } from '../../../redux/slices/patient/notSendAppoinetment'
import { turnOnDetailsPopup } from '../../../redux/slices/patient/patientDetailPopupSlice'

function CannotSendAppointmentWarning() {
  const dispatch = useDispatch()

  return (
    <div className='bg-white absolute top-[30%] px-4 py-2 w-[30em] h-fit rounded-md border-t-[5px] border-red-500'>
      <h1 className='font-semibold'>Cannot send the Appoinetment</h1>
      <p className='text-[14px] py-2'>
        please fill up all of your
        personal details before sending an appointment
      </p>
      <div className='flex flex-row justify-between py-3'>
        <button>Save Appoinetment</button>
        <div className='w-[14em] px-5 flex flex-row justify-between items-center'>
          <button 
            className='bg-red-500 text-white px-3 py-1 rounded-md'
            onClick={e => {
              dispatch(turnOffnotSendAppoinetmentPopup())
            }}
            >
            Cancel
          </button>
          <button className=' px-2 py-1 rounded-md bg-green-500 text-white'
            onClick={e => {
              dispatch(turnOffnotSendAppoinetmentPopup())
              dispatch(turnOnDetailsPopup())
            }}
          >
            Edit Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default CannotSendAppointmentWarning