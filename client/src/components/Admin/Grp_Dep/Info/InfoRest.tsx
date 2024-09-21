import React from 'react'
import MultiMedia from './MultiMedia'
import AttachMents from './AttachMents'

function InfoRest() {
  return (
    <div className='bg-slate-200 rounded-t-3xl h-[80%]'>
      <Members />
      <hr className='border-black mx-3 mt-2' />
      <MultiMedia />
      <AttachMents />
    </div>
  )
}

function Members() {
  return (
    <div className=' w-full py-2 text-center px-3'>
      <h1 className='text-[1.1em] font-semibold mb-4'>Group Members</h1>
      <div className='flex flex-row'>

      <div className='flex flex-col'>
        <div className='bg-black w-[4em] h-[4em] rounded-full'></div>
        <div className='w-fit text-center'>
          <h1 className='text-[15px]'>Siby John</h1>
          <h1 className='text-[12px]'>admin</h1>
        </div>
      </div>

      <div className=''>
        <div className='w-[10em] ml-2 grid grid-cols-3 grid-rows-2 px-2'>
          <SingleMember />
          <SingleMember />
          <SingleMember />
          <SingleMember />
          <SingleMember />
          <SingleMember />
        </div>
        <Navigator />
      </div>
      </div>
    </div>
  )
}

function SingleMember() {
  return (
    <div className='bg-black w-[2.2em] h-[2.2em] my-1 rounded-full'></div>
  )
}

function Navigator() {
  return (
    <div className='w-[10em] items-center justify-evenly flex flex-row'>
      <h1 className='cursor-pointer'>{'<'}</h1>
      <h1 className='text-[12px]'>{'03/20'}</h1>
      <h1 className='cursor-pointer'>{'>'}</h1>
    </div>
  )
}

export default InfoRest