
function ChatDataHeader() {
  return (
    <div className='w-[100%] bg-white flex flex-row justify-between'>
        <div className='flex flex-col py-4 justify-start px-[3em] w-[40%]'>
            <h1 className='font-semibold text-2xl py-1'>Aegon Targerian</h1>
            <div className='flex flex-row items-center w-[40%]'>
                <div className='w-[9px] rounded-full h-[9px] bg-green-400'></div>
                <h1 className='text-sm font-thin ml-2'>Active now</h1>
            </div>
        </div>
        <div className='w-[40%] flex items-center justify-end px-[3em]'>
            <div className='flex flex-row justify-end px-3 items-center'>
                <div className='bg-gray-100 rounded-full w-[2.5em] h-[2.5em] mx-3'></div>
                <div className='bg-gray-100 rounded-full w-[2.5em] h-[2.5em]'></div>
            </div>
        </div>
    </div>
  )
}

export default ChatDataHeader