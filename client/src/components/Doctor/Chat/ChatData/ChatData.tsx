import ChatDataHeader from './ChatDataHeader'
import ChatDataBody from './ChatDataBody'
import ChatDataFooter from './ChatDataFooter'
import { useSelector } from 'react-redux'

function ChatData() {
  const data = useSelector((state: any) => state).textChatReducer
  const { chatData, receverId } = data
  
  return (
    <div className=' w-[75%] flex flex-col items-center'>
      <ChatDataHeader name={receverId} />
      <div className='bg-gray-400 w-[90%] h-[1px]'></div>
      <ChatDataBody data={chatData} />

      <div className='bg-gray-400 w-[90%] h-[1px]'></div>
      <ChatDataFooter />
    </div>
  )
}

export default ChatData