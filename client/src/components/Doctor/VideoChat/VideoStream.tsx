import React, { useEffect, useRef, useState } from 'react'
import { io } from "socket.io-client"
const socket = io('http://localhost:3003/signaling')
import { cleanStream, localVideoEl, muteAudio, muteVideo, remoteVideoEl } from '../../../webRTC/peer2'
import { useSelector } from 'react-redux'

function VideoStream(props: { changer: Function, state: boolean }) {
    useEffect(() => {
        socket.on('end_call', data => {
            cleanStream('incoming')
        })
    }, [])
    
    return (
        <div className='bg-white w-[60%] h-[80%] rounded-l-md'>
            <TitleHolder />
            <StreamHolder state={props.state} />
            <ControlsHolder changer={props.changer} />
        </div>
    )
}

function TitleHolder() {
    return (
        <div className='w-full h-[15%] flex flex-row justify-between px-6'>
            <div className='flex flex-col mt-2'>
                <h1 className='text-[1.3em] font-medium'>Steave's Video Consultation</h1>
                <h1 className='font-thin'>12 April 4:40p PM</h1>
            </div>
            <div>
                <div className='bg-white flex flex-row items-center mt-12 px-2 rounded-lg border-gray-200 border-[1px]'>
                    <div className='bg-white border-red-600 h-[15px] w-[15px] rounded-full border-[4px]'></div>
                    <h1 className='font-medium ml-2'>13:00</h1>
                </div>
            </div>
        </div>
    )
}

export function StreamHolder(props: { state: boolean }) {
    const localRef = useRef(null)
    const remoteRef = useRef(null)

    const Sfull = 'bg-black w-[7%] h-[8em] z-10 rounded-md absolute top-[25em] left-[59.5em]'
    const Shalf = 'bg-black w-[7%] h-[8em] z-10 rounded-md absolute top-[25em] left-[71em]'

    const Full = 'bg-black absolute top-[11em] left-[24.5em] w-[45%] h-[52%] rounded-md'
    const Half = 'bg-black absolute top-[11em] left-[35.9em] w-[45%] h-[52%] rounded-md'
    
    useEffect(() => {
        if(remoteVideoEl.current) {
            let video = remoteRef.current
            video.srcObject = remoteVideoEl.current.srcObject
        }
        if(localVideoEl.current) {

            let video = localRef.current
            video.srcObject = localVideoEl.current.srcObject
        }
        
    }, [])
    
    return (
        <div className='w-full h-[70%] justify-center'>
            <video autoPlay ref={localRef} className={ props.state ? Full : Half } />
            <video autoPlay ref={remoteRef} className={ props.state ? Sfull : Shalf}></video>
        </div>
    )
}

function ControlsHolder(props: { changer: Function }) {
    const data = useSelector((state: any) => state).textChatReducer
    const role = useSelector((state: any) => state).authReducer

    const fullData = { ...data, ...role }

    return (
        <div className='w-full h-[15%] justify-center flex items-center'>
            <div className='flex flex-row w-[40%] justify-between'>
                <div onClick={muteAudio} className='bg-gray-300 h-[2.3em] w-[2.3em] flex justify-center items-center rounded-full'>M</div>
                <div onClick={muteVideo} className='bg-gray-300 h-[2.3em] w-[2.3em] flex justify-center items-center rounded-full'>V</div>
                <div className='bg-gray-300 h-[2.3em] w-[2.3em] flex justify-center items-center rounded-full'>P</div>
                <div
                    onClick={e => {
                        props.changer(e => !e)
                    }} 
                    className='bg-gray-300 cursor-pointer h-[2.3em] w-[2.3em] flex justify-center items-center rounded-full'>T</div>
                <div 
                    onClick={e => {
                        cleanStream('outgoing', fullData)
                    }}
                    className='bg-red-600 rounded-2xl w-[5em]'></div>
            </div>
        </div>
    )
}

export default VideoStream