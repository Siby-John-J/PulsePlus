import SingleUser from "./SingleUser"

function ChatSideBar() {
  return (
    <div className='w-[25%] flex flex-col'>
      <div className='flex justify-start items-center px-5 w-[100%] h-[10%]'>
        <h1 className="text-xl font-semibold">Chats</h1>
      </div>
      <div className='bg-gray-800 w-[100%] h-[90%]'>
        <SingleUser />
        <SingleUser />
        <SingleUser />
        <SingleUser />
        <SingleUser />
        <SingleUser />
      </div>
    </div>
  )
}

export default ChatSideBar
