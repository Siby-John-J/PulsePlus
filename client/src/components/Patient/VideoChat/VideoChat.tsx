import React from 'react'
import VideoStream from './VideoStream'
import TextChat from './textChat'

function VideoChat() {
  return (
    <div className='bg-gray-200 w-[80%] h-[100%] flex flex-row justify-center items-center'>
        <VideoStream />
        <TextChat />
    </div>
  )
}

export default VideoChat