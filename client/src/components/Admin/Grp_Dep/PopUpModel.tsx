import React from 'react'
import MessageBody from './MessageModel'
import { CreateGroup } from './Group'

function PopUpModel() {
  return (
    <div className='bg-white flex flex-col border-black rounded-md border-[1px] w-[25em] min-h-[10em] max-h-[25em] overflow-hidden absolute top-[14%] left-[40%]'>
        {/* <MessageBody /> */}
        <CreateGroup />
    </div>
  )
}

export default PopUpModel