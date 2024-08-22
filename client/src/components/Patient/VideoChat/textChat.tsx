import './style.css'
import { DoctorChatTextHolder, PatientChatTextHolder } from "../../Doctor/Chat/ChatData/ChatDataBody"

function TextChat() {
  return (
    <div className='bg-gray-800 w-[30%] h-[80%] rounded-r-md border-l-2'>
        <div 
            className="w-full h-[10%] flex items-center font-normal border-b-2 border-white pl-6 text-[1.2em]">
            <h1 className="text-white">Text Chat</h1>
        </div>
        <div className="chat-holder w-full h-[80%] overflow-scroll text-black px-2">
            <DoctorChatTextHolder color="bg-orange-500" text="lal" />
            <PatientChatTextHolder text="nigasss" />
        </div>
        <div className="w-full h-[10%] flex justify-center items-center">
            <div className="flex flex-row py-1 w-[90%] px-4 bg-white border-gray-300 shadow-md rounded-md">
                <input type="text" className="text-black w-[16em] outline-none" placeholder="Write your message... " />
                <button className="bg-orange-400 rounded-md px-5 py-2">send</button>
            </div>
        </div>
    </div>
  )
}

export default TextChat