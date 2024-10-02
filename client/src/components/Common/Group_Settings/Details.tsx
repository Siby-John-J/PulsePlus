import React from 'react'

function Details() {
  return (
    <div className='px-3'>
        <Title />
        <Dp />
        <Texts />
        <Info />
    </div>
  )
}

function Info() {
    return (
        <div className='w-fit mt-5 flex flex-col'>
            <div className='flex flex-row mt-4 items-center'>
                <h1 className='font-medium mr-[9.2em]'>total people</h1>
                <p className='text-gray-400 text-[1.3em]'>22</p>
            </div>
            <div className='flex flex-row mt-4'>
                <h1 className='font-medium mr-[10em]'>total posts</h1>
                <p className='text-gray-400 text-[1.3em]'>22</p>
            </div>
            <div className='flex flex-row mt-4'>
                <h1 className='font-medium mr-[6.5em]'>total text message</h1>
                <p className='text-gray-400 text-[1.3em]'>22</p>
            </div>
            <div className='flex flex-row mt-4 w-fit'>
                <h1 className='font-medium mr-[3.1em]'>total multimedia message</h1>
                <p className='text-gray-400 text-[1.3em]'>22</p>
            </div>
            <div className='flex flex-row mt-4'>
                <h1 className='font-medium mr-[6.8em]'>total file message</h1>
                <p className='text-gray-400 text-[1.3em]'>22</p>
            </div>
            <div className='flex flex-row mt-4'>
                <h1 className='font-medium mr-[4.4em]'>total group spend time</h1>
                <p className='text-gray-400 text-[1.3em]'>22min</p>
            </div>
        </div>
    )
}

function Texts() {
    return (
        <div className='w-fit mt-5'>
            <div className='flex flex-row'>
                <h1 className='font-medium mr-[12.8em]'>title</h1>
                <input type="text" value={'group-a'} className='bg-blue-50 w-[30vw] rounded-md px-2 border-[1px] border-blue-300 outline-none py-1' />
            </div>
            <div className='flex flex-row mt-4'>
                <h1 className='font-medium mr-[9.5em]'>description</h1>
                <textarea
                    value={'group-adddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd'}
                     className='bg-blue-50 w-[30vw] overflow-hidden rounded-md px-2 border-[1px] border-blue-300 outline-none py-1 h-[10vh]'
                    name="" id="">
                </textarea>
                {/* <input type="text"  /> */}
            </div>
        </div>
    )
}

function Dp() {
    return (
        <div className='flex flex-row mt-7'>
            <h1 className='w-[10em] mr-[4.5em] font-medium text-[16px]'>profile pic</h1>
            <div className='bg-black w-[4em] h-[4em] rounded-full'></div>
        </div>
    )
}

function Title() {
    return (
        <div>
            <h1 className='font-bold text-[29px]'>Details</h1>
            <h1 className='text-[14px] font-medium'>About some shit that youre gone through</h1>
        </div>
    )
}

export default Details