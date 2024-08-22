import { useEffect, useRef } from "react"
import { Peer } from "../../../webRTC/peer"
import { useDispatch, useSelector } from "react-redux"
import { callOff } from "../../../redux/slices/callSlice"
import { io } from "socket.io-client"
import { createOffer, setRemote } from "../../../webRTC/peer2"
import { useNavigate } from "react-router"
const socket = io('http://localhost:3003/signaling')

function Call() {
    const state: any= useSelector((state: any) => state)
    const data = useSelector((state: any) => state).textChatReducer
    const popupState = useSelector((state: any) => state).callReducer
    const peerRef = useRef(null)
    const peerRef2 = useRef(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const countRef = useRef(0)
    
    const sender = data.receverId ? data.receverId : popupState.sender
    
    useEffect(() => {
        if(countRef.current === 0) {
    console.log('lwal');
          createOffer(state.authRoleReducer.role, sender, state.authReducer.id)
        }
        countRef.current += 1

        socket.on('answer_to_doctor', (data: any) => {
          setRemote(data.offer)
          dispatch(callOff())
          navigate(state.authRoleReducer.role.toLowerCase() + '/video_chat')
        })
          
        socket.on('answer_to_doctor', (data: any) => {
          if(data.id === state.authReducer.id) {
            setRemote(data.offer)
          }
        })
      }, [])
    
    return (
      <div className="bg-black absolute shadow-lg top-[19%] left-[40%] px-0 w-[22em] h-fit rounded-md text-white">
        <h1 className='font-serif py-2 px-2'>Outgoing Call</h1>
        <div className='flex flex-col w-full justify-center items-center'>
            <div className='w-[7em] h-[7em] bg-white rounded-full'></div>
            <h1 className='font-bold text-[1.3em]'>Dr Phil</h1>
            {/* <h1>Is Call</h1> */}
        </div>
        <div className="flex flex-row w-full justify-center my-3">
            <button
                className='bg-red-500 rounded-lg mx-3 py py-2 px-6' 
                onClick={e => {
                  // enut socket-stop
                  dispatch(callOff())
            }}>cancel</button>
      </div>
      </div>
    )
  }
  
export default Call