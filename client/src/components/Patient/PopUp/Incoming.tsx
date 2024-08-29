import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { inComingcallOff } from '../../../redux/slices/incomingSlice'
import { io } from "socket.io-client"
import { recvOffer } from '../../../webRTC/peer2'
import { useNavigate } from 'react-router'
const socket = io('http://localhost:3003/signaling')

function Incoming() {
    const state: any= useSelector((state: any) => state)
    const data = useSelector((state: any) => state).textChatReducer
    const popupState = useSelector((state: any) => state).callReducer
    const incoming = useSelector((state: any) => state).incomingReducer
    const peerRef = useRef(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const sender = data.receverId ? data.receverId : popupState.sender
    
    async function create() {        
        peerRef.current = await recvOffer(incoming.offer, state.authReducer.id, state.authRoleReducer.role, sender)
        dispatch(inComingcallOff())
        navigate(state.authRoleReducer.role.toLowerCase() + '/video_chat')
    }
    
    useEffect(() => {
        socket.on('answer_to_doctor', async (data: any) => {
            console.log(data)
            
            await peerRef.current.setRemoteDescription(JSON.parse(data.offer))
        })
    },[])

    return (
        <div className="bg-black absolute shadow-lg top-[19%] left-[40%] px-0 w-[22em] h-fit rounded-md text-white">
            <h1 className='font-serif py-2 px-2'>Incoming Call</h1>
            <div className='flex flex-col w-full justify-center items-center'>
                <div className='w-[7em] h-[7em] bg-white rounded-full'></div>
                <h1 className='font-bold text-[1.3em]'>Dr Phil</h1>
                {/* <h1>Is Call</h1> */}
            </div>
            <div className="flex flex-row w-full justify-center my-3">
                <button
                    className='bg-green-500 rounded-lg mx-3 py py-2 px-6' 
                    onClick={e => {
                    create()
                }}>accept</button>
                <button
                    className='bg-red-500 rounded-lg mx-3 py py-2 px-6' 
                    onClick={e => {
                    dispatch(inComingcallOff())
                }}>reject</button>
            </div>
    </div>
    )
}

export default Incoming