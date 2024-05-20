import ChatData from "./ChatData/ChatData"
import ChatSideBar from "./ChatSideBar/ChatSideBar"

function DoctorChat() {
  return (
    <div className="flex flex-row w-[80%]">
        <ChatSideBar />
        <ChatData />
    </div>
  )
}

export default DoctorChat