import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { inComingcallOff } from '../../../redux/slices/incomingSlice'
import { Peer } from '../../../webRTC/peer'
import { peer } from '../../../webRTC/peer2'
import { io } from "socket.io-client"
import { recvOffer, setRemote } from '../../../webRTC/peer2'
const socket = io('http://localhost:3003/signaling')

function Incoming() {
    const state: any= useSelector((state: any) => state)
    const data = useSelector((state: any) => state).textChatReducer
    const popupState = useSelector((state: any) => state).callReducer
    const incoming = useSelector((state: any) => state).incomingReducer
    const peerRef = useRef(null)
    const dispatch = useDispatch()

    const sender = data.receverId ? data.receverId : popupState.sender

    // const p1 = new Peer(state.authRoleReducer.role, sender, state.authReducer.id)
    
    async function create() {
        peerRef.current = await recvOffer(incoming.offer, state.authReducer.id, state.authRoleReducer.role, sender)
        
        
        // setRemote(data.offer)
        // if(data.id === state.authReducer.id) p2.setAnswer(data.offer)
    }
    
    useEffect(() => {
        socket.on('answer_to_doctor', async (data: any) => {
            console.log(data)
            
            await peerRef.current.setRemoteDescription(JSON.parse(data.offer))
        })
        // peerRef.ws.ontrack = e => console.log('dfjjjjjjjjjjfffff');
    },[])

    return (
        <div className="bg-white absolute shadow-lg top-[9%] right-[26%] px-0 w-[22em] h-fit rounded-md border-[1px]">
        <h1>Coming</h1>
        <div className="flex flex-row">
        <button onClick={e => {
            create()
        }}>accept</button>
        <button onClick={e => {
            dispatch(inComingcallOff())
        }}>reject</button>
        </div>
    </div>
    )
}

export default Incoming