import React from 'react'
import VideoStream from './VideoStream'
import TextChat from './textChat'

function VideoChat() {
  return (
    <div className='bg-gray-400 w-[80%]'>
        <VideoStream />
        <TextChat />
    </div>
  )
}

export default VideoChat