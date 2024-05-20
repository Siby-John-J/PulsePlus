
function ChatDataFooter() {
  return (
    <div className="w-[100%] flex flex-row items-center h-[10%] justify-between px-[3em]">
        <div className="flex flex-row">
          <div className='bg-gray-300 rounded-full w-[2em] h-[2em]'></div>
          <input type="text" className="mx-5 px-2 outline-none w-[35em]" placeholder="write something"/>
        </div>
        <div className="flex flex-row items-center w-[6em] justify-between">
            <div className='bg-gray-300 rounded-full w-[2.5em] h-[2.5em]'></div>
            <div className='bg-red-500 rounded-full w-[3em] h-[3em] shadow-red-400 shadow-sm'></div>
        </div>
    </div>
  )
}

export default ChatDataFooter
