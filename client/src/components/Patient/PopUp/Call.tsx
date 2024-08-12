import { useEffect, useRef } from "react"
import { Peer } from "../../../webRTC/peer"
import { useDispatch, useSelector } from "react-redux"
import { callOff } from "../../../redux/slices/callSlice"
import { io } from "socket.io-client"
const socket = io('http://localhost:3003/signaling')

function Call() {
    const state: any= useSelector((state: any) => state)
    const data = useSelector((state: any) => state).textChatReducer
    const popupState = useSelector((state: any) => state).callReducer
    const countRef = useRef(0)
    const dispatch = useDispatch()

    const sender = data.receverId ? data.receverId : popupState.sender
    const p = new Peer(state.authRoleReducer.role, sender, state.authReducer.id)
    
    
    useEffect(() => {
        if(state.callReducer.isEnvoker) p.createOffer()
          // if(state.callReducer.isEnvoker) 
        
        socket.on('answer_to_patient', (data: any) => {
          
        })

        socket.on('answer_to_doctor', (data: any) => {
          if(data.id === state.authReducer.id) p.setAnswer(data.offer)
        })
      }, [])
    
    return (
      <div className="bg-white absolute shadow-lg top-[9%] right-[26%] px-0 w-[22em] h-fit rounded-md border-[1px]">
        <h1>lwal</h1>
        <div className="flex flex-row">
          <button onClick={e => {
            if(!state.callReducer.isEnvoker) {
              p.getAnswer(state.callReducer.ans)
            }
          }}>accept</button>
          <button onClick={e => {
            dispatch(callOff())
          }}>reject</button>
        </div>
      </div>
    )
}

export default Call