import React from 'react'
import './Others.css'

function Others() {
  return (
    <div>
      <h1 className='font-bold text-[29px]'>Others</h1>
      <HiddenMessage />
      <SelfDeleteMessage />
      <GroupMain />
    </div>
  )
}

function SelfDeleteMessage() {
  return (
    <div className='flex flex-col w-[50%] h-fit mt-10'>
      <h1 className='font-semibold text-[15px]'>Self Delete Messages</h1>
      <div className='w-full flex flex-row justify-between text-[1.2em] mt-4'>
        <h1 className='text-[15px]'>Message Types</h1>
        <select name="" id="" className='border-black outline-none border-[1px]'>
          <option value="">all</option>
          <option value="">text messages</option>
          <option value="">multimedia</option>
          <option value="">files</option>
        </select>
      </div>
      <div className='w-full flex flex-row justify-between text-[1.2em] mt-4'>
        <h1 className='text-[15px]'>Deleting time</h1>
        <div className='flex flex-col'>
        <input value={'34'} type="number" className='mb-3 outline-none border-black px-3 border-[1px] rounded-sm w-[12em]'/>
        <select name="" id="" className='border-black outline-none border-[1px]'>
          <option value="">seconds</option>
          <option value="">minutes</option>
          <option value="">hours</option>
        </select>
        </div>
      </div>
    </div>
  )
}

function HiddenMessage() {
  return (
    <div className='flex flex-col w-[50%] h-fit mt-10'>
      <h1 className='font-semibold text-[15px]'>Hidden Message</h1>
      <div className='w-full flex flex-row justify-between text-[1.2em] mt-4'>
        <h1 className='text-[15px]'>Spend Count</h1>
        <input type="number" value={'4'} className='outline-none border-black px-3 border-[1px] rounded-sm' />
      </div>
      <div className='w-full flex flex-row justify-between text-[1.2em] mt-4'>
        <h1 className='text-[15px]'>Spending Time</h1>
        <select value={''} name="" id="" className='outline-none border-black rounded-sm border-[1px] px-1'>
          <option value="">six hours</option>
          <option value="">half day</option>
          <option value="">one day</option>
          <option value="">one week</option>
          <option value="">one month</option>
        </select>
      </div>
      <div className='w-full flex flex-row justify-between text-[1.2em] mt-4'>
        <h1 className='text-[15px]'>Spending Type</h1>
        <select name="" id="" className='outline-none border-black rounded-sm border-[1px] px-1'>
          <option value="">all</option>
          <option value="">text messages</option>
          <option value="">multimedia</option>
          <option value="">files</option>
        </select>
      </div>
      <div className='w-full flex flex-row justify-between text-[1.2em] mt-4'>
        <h1 className='text-[15px]'>Available For</h1>
        <select name="" id="" className='outline-none border-black rounded-sm border-[1px] px-1'>
          <option value="">all</option>
          <option value="">admin</option>
          <option value="">co-admin</option>
          <option value="">members</option>
        </select>
      </div>
    </div>
  )
}

function GroupMain() {
  return (
    <div>
      <h1 className='font-semibold text-[15px]'>Advanced settings</h1>
      <h1 className='border-red-500 mt-5 border-[3px] cursor-pointer w-fit bg-black text-white px-4 py-1 font-medium rounded-md '>Delete Group</h1>
    </div>
  )
}

export default Others