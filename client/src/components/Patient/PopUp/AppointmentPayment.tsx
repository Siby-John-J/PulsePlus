import React, { useState } from 'react'
import { useFetchDeleteTemplate, useFetchGetTemplate, useFetchPostTemplate, useFetchPutTemplate } from '../../../hooks/usePatient'
import { useDispatch, useSelector } from 'react-redux'
import { isOffModel } from '../../../redux/slices/doctor/appointPaymentSlice'

function AppointmentPayment() {
  const dispatch = useDispatch()
  const state = useSelector((state: any) => state)

  const [diagnosys, setDig] = useState('')
  const [date, setDate] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [span, setSpan] = useState('')
  const [fee, setFee] = useState(0)

  const [status, setStatus] = useState<boolean>(true)

  const handleFee = (res: any) => {
    const calc = 50 / 10
    let num = 0

    if(res && res[0] === 1) {
      num = 300
    }
    if(res && res[1]) {
      num += (calc * res[1])
    }

    if(!(num <= 0)) {
      setFee(num)
    } else {
      setFee(0)
    }
  }

  const handleFetch = async(e: any) => {
      if(date === '' || span === '' || diagnosys === '' ||
        startTime === '' || endTime === ''
      ) {
        setStatus(false)
        return false
      } else {
        setStatus(true)
      }

      const response1 = await useFetchDeleteTemplate(
        `http://localhost:2000/admin-service/appointment/remove_record/?id=${state.authReducer.id}`
      )

      const response = await useFetchPutTemplate('http://localhost:2000/admin-service/appointment/add_doctor', {
        id: state.authReducer.id,
        appointId: state.appointPaymentReducer.appointId
      })
  
      if(response.error) {
        alert('already accepted')
        return false
      }  

    const response2 = await useFetchPostTemplate(
      `http://localhost:2000/communication-service/doctor_notification/create`,
      {
      date,
      span,
      diagnosys,
      startTime,
      endTime,
      fee,
      senderId: state.appointPaymentReducer.senderId
    })
    return true
  }
  
  return (
    <div className='bg-white absolute top-[20%] px-4 py-2 w-[30em] border-orange-500 border-t-4 h-fit rounded-md'>
      <h1 className='font-semibold text-[1.2em] rounded-sm bg-emerald-100 px-2 text-emerald-800'>Fill Up The Appointment Accept</h1>
      {
        status ? 
        <p className='text-[14px] py-2 font-medium'>
          submit your data for next appointment
        </p> : 
          <p className='text-[14px] py-2 font-medium text-red-500'>
          invalid credentials cannot send appointment
        </p>
      }

      <div className='flex flex-col justify-between py-3'>
        <div className='flex-col h-fit'>
            <div className='w-[100%]'>
              <h1 className='font-medium text-[1.1em]'>Diagnosys</h1>
              <input
                onInput={e => setDig(e.target.value)} 
                className='border-black border-[2px] py-4 px-2 rounded-md h-[1.2em] w-[100%]' type="text" />
            </div>
            <div className='flex flex-col'>
              <label className='font-medium text-[1.1em]'>Date</label>
              <input
                onInput={e => setDate(e.target.value)}
                className='border-black border-[2px] py-4 px-2 rounded-md h-[1.2em] w-[fit]' type="date"/>
            </div>
            <div className='flex flex-col'>
              <label className='font-medium text-[1.1em]'>Time</label>
              <div className='flex flex-row justify-between w-[100%]'>
              <input
                onInput={e => {
                  const splited = e.target.value.split(':')
                  if(Number(splited[0]) > 12) {
                    const result = Number(splited[0]) - 12
                    setStartTime(String(result) + ':' + splited[1])
                    setSpan('PM')
                  } else {
                    setSpan('AM')
                    setStartTime(e.target.value)
                  }
                }}
                className='border-black border-[2px] py-4 px-2 rounded-md h-[1.2em] w-[49%]' 
                type="time"/>
              <input
                onInput={e => {
                  const res = limitDuration(e, startTime)
                  handleFee(res)

                  const splited = e.target.value.split(':')
                  if(Number(splited[0]) > 12) {
                    const result = Number(splited[0]) - 12
                    setEndTime(String(result) + ':' + splited[1])
                  } else {
                    setEndTime(e.target.value)
                  }

                }}
                className='border-black border-[2px] py-4 px-2 rounded-md h-[1.2em] w-[49%]' 
                type="time" />
              </div>
            </div>
            
            <div>
              <h1 className='font-medium text-[1.1em]'>Appointment Fee</h1>
              <h1>{fee + ' ruppies'}</h1>
            </div>
        </div>
        <div className='w-fit px-5 flex flex-row justify-between items-center'>
          <button
            className='bg-red-500 text-white px-3 py-1 rounded-md'
            onClick={e => {
            //   dispatch(turnOffnotSendAppoinetmentPopup())
                dispatch(isOffModel())
            }}
            >
            Cancel
          </button>
          <button className='mx-2 px-2 py-1 rounded-md bg-green-500 text-white'
            onClick={e=> {
              handleFetch(e).then(res => {
                if(res) alert('sucessfully updated')
              })
              dispatch(isOffModel())
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

const limitDuration = (e: any, time: string) => {
  const duration = e.target.value.split(':')
  const duration2 = time.split(':')
  const mathHolder = Number(duration[0]) - Number(time.split(':')[0])
  const minHolder = Number(duration[1]) - Number(time.split(':')[1])

  if(Number(duration[0]) > 12) {
    if(mathHolder > 1 || mathHolder < 0) {
      return null
    }
  } else if(mathHolder > 1 || mathHolder < 0){
    return null
  }

  const start = new Date(0, 0, 0, Number(duration[0]), Number(duration[1])).getTime()
  const end = new Date(0, 0, 0, Number(duration2[0]), Number(duration2[1])).getTime()
  
  const hr = Math.floor((start - end) / (1000 * 60 * 60))
  const min = Math.floor(((start - end) % (1000 * 60 * 60)) / (1000 * 60))
  
  return [hr, min]
  
}

export default AppointmentPayment