
function ChatWindowBody() {
  return (
    <div className='bg-gray-100 w-[100%] h-[76%] px-8 py-8'>
      <ChatHolderLeft />
      <ChatHolderRight />
    </div>
  )
}

function ChatHolderLeft() {
  return (
    <div className='text-black flex flex-col items-start'>
      <div className='font-semibold bg-white w-fit px-5 shadow-md py-5 rounded-full'>
        hi shits niggers are gei
      </div>
      <h1 className='text-gray-400 ml-[2.4em] font-normal'>sus</h1>
    </div>
  )
}

function ChatHolderRight() {
  return (
    <div className='text-black flex flex-col items-end'>
      <div className='font-semibold bg-orange-400 text-white w-fit px-5 shadow-md py-5 rounded-full'>
        hi shits niggers are meemz
      </div>
      <h1 className='text-gray-400 mr-[2.4em] font-normal'>sus</h1>
    </div>
  )
}

export default ChatWindowBody