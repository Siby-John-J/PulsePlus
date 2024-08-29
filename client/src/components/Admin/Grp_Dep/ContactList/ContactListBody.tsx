import React from 'react'

function ContactListBody() {
  return (
    <div className='mt-3'>
        <SingleContact />
        <SingleContact />
    </div>
  )
}

function SingleContact() {
    const hoverStyle = 'bg-red-200 hover:border-l-4 hover:border-l-red-500'

    return (
        <div className={'flex flex-row border-b-2 border-b-gray-300 w-[100%] h-[4.5em] cursor-pointer hover:' + hoverStyle}>
           {/* <GroupLabel /> */}
            <DepartmentLabel />
            <div className='flex-col w-[70%]'>
                <div className='flex flex-row justify-between h-[30%] px-2'>
                    <h1 className='font-medium'>Cardiology</h1>
                    <h1 className='font-light '>3min ago</h1>
                </div>
                <div className='flex h-[70%] flex-row justify-between items-center px-2'>
                    <h1 className='font-normal text-[14px]'>thi Cardiology</h1>
                    <h1 className='bg-red-500 text-[12px] text-white px-2 rounded-full'>3</h1>
                </div>
            </div>
        </div>
    )
}

export function GroupLabel() {
    return (
        <div className=' w-[30%] flex items-center justify-center'>
            <div className='rounded-full bg-black w-[2em] relative left-2 bottom-1 h-[2em]'></div>
            <div className='rounded-full bg-blue-600 right-1 top-2 relative w-[2em] h-[2em]'></div>
        </div>
    )
}

export function DepartmentLabel() {
    return (
        <div className=' w-[30%] flex items-center justify-center'>
            <div className='rounded-md bg-black w-[2em] relative left-2 bottom-1 h-[2em]'></div>
            <div className='rounded-md bg-purple-600 right-1 top-2 relative w-[2em] h-[2em]'></div>
        </div>
    )
}

export default ContactListBody