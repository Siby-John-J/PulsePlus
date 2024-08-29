import { useEffect, useState, useCallback, useRef } from "react"
import { useFetchPutTemplate } from "../../../../hooks/usePatient"
import { useDispatch, useSelector } from "react-redux"
import { changeChatView } from "../../../../redux/slices/doctor/textChatSlice"
import { io } from "socket.io-client"
const socket = io('http://localhost:3003/text_chat')

function ChatDataFooter() {
  const dispatch = useDispatch()

  async function sendData(data: any) {
    const { chatData, ...rest } = data
    const response = await useFetchPutTemplate('http://localhost:2000/communication-service/text_chat/addText', rest)
    dispatch(changeChatView(response))
  }

  const [text, setText] = useState<string>('')
  const inputRef = useRef(null)
  const data = useSelector((state: any) => state).textChatReducer
  const fullData = { ...data }
  fullData.text = { p2: text }

  const callback = useCallback((sender: string, recever: string) => {
    socket.emit('getChat', {
      id: recever,
      sender: sender,
      role: 'doctor'
    })
  }, [])

  return (
    <div className="w-[100%] flex flex-row items-center h-[10%] justify-between px-[3em]">
        <div className="flex flex-row">
          <div className='bg-gray-300 rounded-full w-[2em] h-[2em]'></div>
          <input
            ref={inputRef}
            onChange={e => {
              setText(e.target.value)
            }}
            type="text" 
            className="mx-5 px-2 outline-none w-[35em]" 
            placeholder="write something"/>
        </div>
        <div className="flex flex-row items-center w-[6em] justify-between">
            <div className='bg-gray-300 rounded-full w-[2.5em] h-[2.5em]'></div>
            <div 
              onClick={e => {
                sendData(fullData)
                setText(e => '')
                inputRef.current.value = ''
                callback(fullData.senderId, fullData.receverId)
              }}
              className='bg-red-500 cursor-pointer rounded-full w-[3em] h-[3em] shadow-red-400 shadow-sm'></div>
        </div>
    </div>
  )
}

export default ChatDataFooter
