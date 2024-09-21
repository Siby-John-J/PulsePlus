import { ChatTextHolderStyle } from "../../../types/hardcoded/styleEnum"
import { UserTemplateStyle } from "../../../types/hardcoded/styleEnum"
import { UserTemplate } from "../../Admin/Dashboard/DoctorMiniList"
import Appointment from "../../Admin/Grp_Dep/DataBody/Appointment"

import './MainChat.css'

function MainChat() {
  return (
    <div className="w-[100%] h-[100%] flex flex-col">
        <ChatHeader />
        <ChatBody />
        <ChatFooter />
    </div>
  )
}

function ChatHeader() {
    const { ROW } = UserTemplateStyle

    return (
        <div className="w-[100%] h-[15%] flex flex-row justify-between px-6 border-gray-400 border-b-[1px]">
            <div className="scale-[120%] mt-7">
                <UserTemplate details={{name: 'SOLID', details: 'Coding', style: 'text-light text-gray-500', mainStyle: ROW}} />
            </div>
            <div className="w-[30%] h-[100%] bg-green-200">
                
            </div>
        </div>
    )
}

function ChatBody() {
    return (
        <div className="w-[100%] h-[75%] px-4 overflow-scroll text_holder">
            <ChatTextHolder part={'incoming'} />
            <ChatTextHolder part={'incoming'} />
            <ChatTextHolder part={'incoming'} />
            <ChatTextHolder part={'outgoing'} />
            <Appointment holder={'doctor'} />
            <div></div>
        </div>
    )
}

export function ChatTextHolder(props: any) {
    const { STYLE1, STYLE2, STYLE3, STYLE4 } = ChatTextHolderStyle
    const { part } = props

    return (
        <div className={part === 'incoming' ? STYLE1 : STYLE2}>
            <div className={part === 'incoming' ? STYLE3 : STYLE4}>
                <h1 className="text-[1em]">Niggas in paris are the meth</h1>
            </div>
            <p className="font-light">10:20pm Yesterday</p>
        </div>
    )
}

function ChatFooter() {
    return (
        <div className="w-[100%] h-[10%] flex flex-row border-t-[1px] border-gray-400">
            <div className="flex w-fit items-center px-8">
                <input className="w-[30em] h-[2em] cursor-text outline-none px-4" type="text" placeholder="Type a message here" />
            </div>
            <div className="flex w-fit ">
                <div></div>
                <div className="flex justify-evenly items-center px-2 w-[10em]">
                    <div className="bg-black w-10 h-10 rounded-full"></div>
                    <div className="bg-black w-10 h-10 rounded-full"></div>
                    <button className="bg-red-500 px-2 shadow-md py-3 text-white rounded-full">send</button>
                </div>
            </div>
        </div>
    )
}

export default MainChat