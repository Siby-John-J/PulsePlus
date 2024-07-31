import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { turnOffappoinetmentFillupPopup } from '../../../redux/slices/patient/appointmentFillup'
import { turnOnnotSendAppoinetmentPopup } from '../../../redux/slices/patient/notSendAppoinetment'
import { useAddAppointment } from '../../../hooks/useMessage'
import { turnOnNotFilledPopup } from '../../../redux/slices/patient/notFilledSlice'

function AppoinetmentFillup() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const dispatch = useDispatch()
  const state: any= useSelector((state: any) => state).patientReducer

  const saveAppointement = async () => {
    const payload = { title, content, status: 'pending', senderId: state._id}
    if(!payload.senderId) dispatch(turnOnNotFilledPopup())
    
    const res = await useAddAppointment(payload)
  }

  return (
    <div className='bg-white absolute top-[10%] px-4 py-2 w-[30em] h-fit rounded-md'>
        <h1 className='text-lg font-semibold py-4'>Create Appoientment</h1>
        <div className='flex flex-row pt-2 justify-between items-center'>
            <h1>Decease</h1>
            <input 
              onChange={e => setTitle(e.target.value)}
              type="text" className='outline-none border-[1px] border-gray-500 h-[2em] w-[20em] px-2 rounded-md' />
        </div>
        <div className=' flex flex-col justify-between'>
            <h1 className='py-5'>Description</h1>
            <textarea 
              onChange={e => setContent(e.target.value)}
              className='outline-none border-[1px] pb-[60%] border-gray-500 px-2 rounded-md'></textarea>
            {/* <input type="text" className='outline-none border-[1px] pb-[55%] border-gray-500 h-[90%] w-[20em] px-2 rounded-md' /> */}
        </div>
        <div className='flex flex-row justify-between items-center py-3'>
        <button>Save Appoinetment</button>
        <div className='w-[14em] px-7 py-1 flex flex-row justify-between items-center'>
          <button 
            className='bg-red-500 text-white px-3 py-1 rounded-md'
            onClick={e => {
              dispatch(turnOffappoinetmentFillupPopup())
            }}
            >Cancel</button>
          <button 
            className=' px-5 py-1 rounded-md bg-orange-500 text-white'
            onClick={e => {
              saveAppointement()
              dispatch(turnOffappoinetmentFillupPopup())
              // dispatch(turnOnnotSendAppoinetmentPopup())
            }}
            >
            Send</button>
        </div>
      </div>
    </div>
  )
}

export default AppoinetmentFillup