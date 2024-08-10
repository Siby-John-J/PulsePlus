import { useEffect, useState } from "react"
import SingleUser from "./SingleUser"
import { useFetchGetTemplate } from "../../../../hooks/usePatient"
import { useDispatch, useSelector } from "react-redux"
import { changeChatView } from "../../../../redux/slices/doctor/textChatSlice"
import { io } from "socket.io-client"
const socket = io('http://localhost:3003/text_chat')

function ChatSideBar() {
  const state = useSelector((state: any) => state).authReducer
  const [chatData, setChatData] = useState<object[]>([])
  const dispatch = useDispatch()

  async function getAndSetData() {
    const url = 'http://localhost:2000/communication-service/text_chat/listData/?role=doctor&id='+ state.id
    const response = await useFetchGetTemplate(url)
    setChatData(prev => response)

    dispatch(changeChatView(response[0]))
  }
  
  useEffect(() => {
    getAndSetData()

    socket.on('sendToDoctor', (data) => {
      console.log(data, state.id);
      if(data.sender === state.id) {
        
        getAndSetData()
      }
    })
    
  }, [])

  return (
    <div className='w-[25%] flex flex-col'>
      <div className='flex justify-start items-center px-5 w-[100%] h-[10%]'>
        <h1 className="text-xl font-semibold">Chats</h1>
      </div>
      <div className='bg-gray-800 w-[100%] h-[90%]'>
        {
          chatData.map((item: any) => {
            return ( <SingleUser data={item} /> )
          })
        }
      </div>
    </div>
  )
}

export default ChatSideBar


