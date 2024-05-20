import React from 'react'
import { ToggleButton } from '../PatientsList/PatientListBody'

function SurgeryEdit() {
  return (
    <div className='absolute top-[10em] rounded-lg bg-white border-black border-[1px] h-fit w-[25%]'>
        <h1 className='text-xl font-medium px-4 py-4'>Edit Surgery Details</h1>
        <p className='text-[15px] px-4'>
            3 out of 7 Doctors
        </p>
        <div className='w-full py-2 h-fit flex items-center flex-col'>
            <DoctorsListEdit />
            <DoctorsListEdit />
        </div>
        <div className='w-full py-2 h-fit flex items-center border-slate-500 border-t-[1px]'>
            <div className='flex flex-col px-4'>
                <h1 className='font-medium'>Invite Doctors</h1>
                <p className='text-[14px] w-[70%]'>
                    Invite new Doctors for Continuing this Surgery
                </p>
            </div>
            <div className='bg-white w-[50%] h-[5em] flex items-center'>
                <button className='bg-blue-500 py-2 px-6 rounded-full text-white'>Invite</button>
            </div>
        </div>
        <div className='w-full h-[5em] flex flex-col justify-evenly items-start px-6'>
            <h1 className='text-[16px]'>Change Date</h1>
            <div className='w-[90%] flex justify-between'>
            <input type="date" />
            <input type="time" />
            </div>
        </div>
        <SaveField />
    </div>
  )
}

function DoctorsListEdit() {
    return (
        <div className='w-[90%] justify-between px-5 items-center flex flex-row mt-2 h-[4em]'>
            <h1 className='font-medium'>Doctor Phil Swift</h1>
            <ToggleButton />
        </div>
    )
}

function SaveField() {
    return (
        <div className='border-black border-t-[1px] py-5 w-full h-fit py-3 flex flex-row justify-between px-20'>
            <button className='bg-red-500 py-1 px-6 text-white rounded-full'>Cancel</button>
            <button className='bg-green-500 py-1 px-6 text-white rounded-full'>Save</button>
        </div>
    )
}

export default SurgeryEdit