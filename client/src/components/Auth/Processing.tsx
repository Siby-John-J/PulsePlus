import React from 'react'
import { useNavigate } from 'react-router'

function Processing() {
  const navigate = useNavigate()

  return (
    <div className='w-[100%] h-[100%]'>
        <div className='h-[50%] w-[60%]  bg-emerald-200 rounded-md absolute left-[15em] bottom-[17em]'></div>
        <div className='h-[50%] w-[60%] bg-emerald-600 rounded-md absolute left-[25em] bottom-[9em]'></div>
        <div
            className='flex items-center flex-col justify-evenly h-[50%] w-[60%] bg-emerald-400 rounded-md z-10 absolute left-[20em] shadow-xl bottom-[13em]'>
            <div className='w-[100%]'>
            <button
              onClick={e => navigate('/')} 
              className='ml-[2em]'>{'<-- go back to login'}</button>
            </div>
            <div className="w-[7em] h-[7em] bg-black rounded-full"></div>
            <h1 className='font-semibold text-[27px] text-white'>Youre Account has been processing</h1>
            <h1 className='mb-[5em]'>Please wait until your credentials was verified by the admin</h1>
        </div>
    </div>
  )
}

export default Processing