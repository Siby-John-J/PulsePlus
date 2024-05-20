import ChatUserModel from "./ChatUserModel"
import ChatWindowBody from "./ChatWindowBody"
import ChatWindowFooter from "./ChatWindowFooter"
import ChatWindowHeader from "./ChatWindowHeader"

function PatientChats() {
  return (
    <div className='w-[80%] flex flex-row'>
      <div className="h-[100%] w-[30%] bg-gray-200 flex flex-col items-center py-[3em] chat-user-holder">
        <ChatUserModel />
        <ChatUserModel />
      </div>
      <div className="h-[100%] w-[70%] text-white chat-user-body">
        <ChatWindowHeader />
        <ChatWindowBody />
        <ChatWindowFooter />
      </div>
    </div>
  )
}

export default PatientChats