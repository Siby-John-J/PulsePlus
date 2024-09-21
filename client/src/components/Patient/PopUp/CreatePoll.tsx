import React from 'react'

function CreatePoll() {
  return (
    <div className="bg-white absolute top-[30%] px-4 py-2 w-[30em] h-fit rounded-md">
        <h1 className='font-bold text-[1.2em]'>Create Poll</h1>
        <div className='flex flex-col'>
            <h1>Enter your question</h1>
            <input type="text" className='outline-none border-[1px] border-black px-2 py-1' placeholder='type here..' />
            <h1>Create Options</h1>
            <button>create one</button>
        </div>
        <div className='flex flex-row'>
            <button>Create</button>
            <button>Cancel</button>
        </div>
    </div>
  )
}

export default CreatePoll