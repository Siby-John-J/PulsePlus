import VideoStream from "./VideoStream"
import TextHolder from "./TextHolder"
import { useState } from "react"

function VideoChat() {
    const [isChat, setIsChat] = useState<boolean>(true)

    return (
        <div className="bg-gray-200 w-[80%] h-[100%] flex flex-row justify-center items-center">
            <VideoStream state={isChat} changer={setIsChat} />
            {
                isChat && <TextHolder />
            }
        </div>
    )
}

export default VideoChat