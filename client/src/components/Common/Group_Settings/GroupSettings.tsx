import React from 'react'
import Details from './Details'
import Members from './Members'

function GroupSettings() {
  return (
    <div className='w-[80%] h-[100%]'>
        <Header />
        <div className='flex flex-row w-[100%] h-[92.8%]'>
            <Selector />
            <Holder />
        </div>
    </div>
  )
}

function Header() {
    return (

        <div className=' h-[3em] w-[100%] flex flex-row items-center px-3 justify-between pb-1 mt-1 border-b-[1px] border-black'>
            <div className='flex flex-row items-center'>
                <button className='border-[1px] border-blue-200 text-blue-500 font-medium px-2 py-1 rounded-md'>Back</button>
                <div className='px-3 flex flex-row'>
                    <h1 className='text-[14px] font-medium text-blue-500'>settings /</h1>
                    <h1 className='text-[14px] font-medium'>details</h1>
                </div>
            </div>
            <div>
                <button className='text-white bg-blue-400 font-medium px-2 py-1 rounded-md'>Save changes</button>
            </div>
        </div>
    )
}

function Holder() {
    return (
        <div className='h-[90%] w-[80%] pt-4'>
            <Details />
        </div>
    )
}

function Selector() {
    return (
        <div className='h-[90%] w-[20%] pt-4'>
            <SingleSelector name="Details"/>
            <SingleSelector name="Members"/>
            <SingleSelector name="Others"/>
            {/* <SingleSelector name="lol"/> */}
        </div>
    )
}

function SingleSelector(props: { name: string }) {
    return (
        <div className='w-full h-[3em] flex items-center px-5 hover:bg-blue-100 hover:text-blue-500'>
            <h1 className='font-medium '>{props.name}</h1>
        </div>
    )
}

export default GroupSettings