import { useEffect, useState } from "react"
import ChatUserModel from "./ChatUserModel"
import ChatWindowBody from "./ChatWindowBody"
import ChatWindowFooter from "./ChatWindowFooter"
import ChatWindowHeader from "./ChatWindowHeader"
import { useDispatch, useSelector } from "react-redux"
import { useFetchGetTemplate } from "../../../hooks/usePatient"
import { changeChatView } from "../../../redux/slices/doctor/textChatSlice"
import { io } from "socket.io-client"
const socket = io('http://localhost:3003/text_chat')

function PatientChats() {
  const dispatch = useDispatch()
  const [allChatData, setChatData] = useState<object[]>([])
  const state = useSelector((state: any) => state).authReducer
  const data = useSelector((state: any) => state).textChatReducer
  const { chatData, receverId } = data

  async function getAndsetData(id: string) {
    const url = 'http://localhost:2000/communication-service/text_chat/listData/?role=patient&id=' + id
    const response = await useFetchGetTemplate(url)
    setChatData(prev => response)
    dispatch(changeChatView(response[0]))
  }

  useEffect(() => {
    getAndsetData(state.id)

    socket.on('sendToPatient', (data) => {
      console.log(data, state.id);
      if(data.id === state.id) {
        
        getAndsetData(state.id)
      }
    })
    
  },[])

  return (
    <div className='w-[80%] flex flex-row'>
      <div className="h-[100%] w-[30%] bg-gray-200 flex flex-col items-center py-[3em] chat-user-holder">
        {
          allChatData.map((item: any) => {
            return (
              <ChatUserModel data={item} />
            )
          })
        }
      </div>
      <div className="h-[100%] w-[70%] text-white chat-user-body">
        <ChatWindowHeader details={receverId} />
        <ChatWindowBody data={chatData} />
        <ChatWindowFooter />
      </div>
    </div>
  )
}

export default PatientChats