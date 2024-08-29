import '../style.css'
import { useCallback, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFetchPutTemplate } from '../../../hooks/usePatient'
import { changeChatView } from '../../../redux/slices/doctor/textChatSlice'
import { io } from "socket.io-client"
const socket = io('http://localhost:3003/text_chat')

function ChatWindowFooter() {
  const [text, setText] = useState<string>('')
  const inputRef = useRef(null)
  const dispatch = useDispatch()
  const data = useSelector((state: any) => state).textChatReducer
  const fullData = { ...data }
  fullData.text = { p1: text }

  async function sendData(data: any) {
    const response = await useFetchPutTemplate('http://localhost:2000/communication-service/text_chat/addText', data)
    dispatch(changeChatView(response))
  }
  // console.log(data);
  
  const callback = useCallback((sender: string, recever: string) => {
    socket.emit('getChat', {
      id: recever,
      sender: sender,
      role: 'patient'
    })
  }, [])

  return (
    <div className='chat-head bg-white text-black w-[100%] h-[12%] flex items-center'>
      <input
        ref={inputRef}
        onChange={e => setText(e.target.value)} 
        placeholder='Type something here' 
        className='bg-gray-200 border-[1px] w-[80%] h-[60%] px-7 outline-none rounded-full ml-[2em]' type="text" />
      <button
        onClick={e => {
          sendData(fullData)
          setText(e => '')
          inputRef.current.value = ''
          
          callback(fullData.senderId, fullData.receverId)
        }}
        className='send-btn h-[60%] rounded-full bg-orange-400 w-[3.3em] text-white'>X</button>
    </div>
  )
}

export default ChatWindowFooter