import { useState } from 'react'
import ChatData from './ChatData'
import InputField from './InputField'
import Appointment from './Appointment'

function DataBody() {
  const [chats, setChats] = useState([
    {
      info: 'lwal',
      type: 'text'
    },
    {
      info: 'lwal',
      type: 'image'
    }
  ])
  return (
    <div className=' w-[60%] py-5 flex flex-col justify-between'>
      <div className=''>
        {
          chats.map(data => <ChatData data={data}/>)
        }
        <MarkDate />
        <Appointment holder={'admin'} />
      </div>
      <div className='flex flex-row px-2'>
        <InputField />
        <div className="w-[3em] h-[3em] mx-2 rounded-full bg-black"></div>
      </div>
    </div>
  )
}

function MarkDate() {
  return (
    <div className=' flex flex-row items-center'>
      <hr  className='border-gray-200 border-[0.1px] w-full te'/>
      <h1 className='bg-gray-200 px-3 rounded-md'>yesterday</h1>
      <hr  className='border-gray-200 border-[0.1px] w-full te'/>
    </div>
  )
}

export default DataBody