import React, { useEffect, useRef } from 'react'
import VideoChat from './VideoChat'
import textChat from './textChat'
import { StreamHolder } from '../../Doctor/VideoChat/VideoStream'
import { localVideoEl,cleanStream, localStream, remoteVideoEl } from '../../../webRTC/peer2'
import { useNavigate } from 'react-router'

function VideoStream() {
  return (
        <div className='bg-white w-[60%] h-[80%] rounded-l-md'>
            {/* <TitleHolder /> */}
            {/* <StreamHolder state={true} /> */}
            <VideoStreamHolder />
            {/* <ControlsHolder changer={props.changer} /> */}
        </div>
  )
}

function VideoStreamHolder() {
  const localRef = useRef(null)
  const remoteRef = useRef(null)

  useEffect(() => {
    if(remoteVideoEl.current) {
      remoteRef.current.srcObject = remoteVideoEl.current.srcObject
    }
    if(localVideoEl.current) {
      localRef.current.srcObject = localVideoEl.current.srcObject
    }
    // remoteRef.current = {}
        
  },[])

  return (
    <div className='w-full h-[70%] justify-center'>
    <video autoPlay ref={localRef} className='bg-black absolute top-[8em] left-[24.5em] w-[45%] h-[62%] rounded-md' />
    <VideoControlsHolder />
    <video autoPlay ref={remoteRef} className={'bg-green-300 w-[7%] h-[8em] z-10 rounded-md absolute top-[25em] left-[59.5em]'}></video>
  </div>
  )
}

function VideoControlsHolder() {
  const navigate = useNavigate()

  return (
      <div className='w-[50em] absolute top-[28em] left-[19.5em] h-[15%] justify-center flex items-center'>
          <div className='flex flex-row w-[40%] justify-between '>
              <div className='bg-gray-300 opacity-65 h-[2.3em] w-[2.3em] flex justify-center items-center rounded-full'>M</div>
              <div className='bg-gray-300 opacity-65 h-[2.3em] w-[2.3em] flex justify-center items-center rounded-full'>V</div>
              <div 
                onClick={e => {
                  cleanStream()
                  navigate('/patient/chats')
                }}
                className='bg-red-600 rounded-2xl w-[5em]'></div>
              <div className='bg-gray-300 opacity-65 h-[2.3em] w-[2.3em] flex justify-center items-center rounded-full'>P</div>
              <div 
                  className='bg-gray-300 opacity-65 cursor-pointer h-[2.3em] w-[2.3em] flex justify-center items-center rounded-full'>T</div>
          </div>
      </div>
  )
}


export default VideoStream