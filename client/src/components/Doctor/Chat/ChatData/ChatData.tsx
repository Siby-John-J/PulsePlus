
import ChatDataHeader from './ChatDataHeader'
import ChatDataBody from './ChatDataBody'
import ChatDataFooter from './ChatDataFooter'

function ChatData() {
  return (
    <div className=' w-[75%] flex flex-col items-center'>
      <ChatDataHeader />
      <div className='bg-gray-400 w-[90%] h-[1px]'></div>
      <ChatDataBody />

      <div className='bg-gray-400 w-[90%] h-[1px]'></div>
      <ChatDataFooter />
    </div>
  )
}

export default ChatData