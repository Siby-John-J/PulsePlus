import React from 'react'

function Details() {
  return (
    <div className='px-3'>
        <Title />
        <Dp />
        <Texts />
    </div>
  )
}

function Texts() {
    return (
        <div className='w-fit mt-5'>
            <div className='flex flex-row'>
                <h1 className='font-medium mr-[8em]'>title</h1>
                <input type="text" value={'group-a'} className='bg-blue-50 w-[30vw] rounded-md px-2 border-[1px] border-blue-300 outline-none py-1' />
            </div>
            <div className='flex flex-row mt-4'>
                <h1 className='font-medium mr-[4.6em]'>description</h1>
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
            <h1 className='w-[10em] mr-10 text-[14px]'>this is somethings that youre beings gay and whit</h1>
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