import { ChatTextHolderStyle } from "../../../types/hardcoded/styleEnum"
import { UserTemplateStyle } from "../../../types/hardcoded/styleEnum"
import { UserTemplate } from "../../Admin/Dashboard/DoctorMiniList"

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
        <div className="w-[100%] h-[75%] px-4">
            <ChatTextHolder part={'incoming'} />
            <ChatTextHolder part={'outgoing'} />
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
                <h1 className="text-[1.1em]">Niggas in paris are the meth</h1>
            </div>
            <p className="font-light">10:20pm Yesterday</p>
        </div>
    )
}

function ChatFooter() {
    return (
        <div className="w-[100%] h-[10%] flex flex-row border-t-[1px] border-gray-400">
            <div className="flex w-fit items-center px-8">
                <input className="w-[20em] h-[2em] cursor-text outline-none px-4" type="text" placeholder="Type a message here" />
            </div>
            <div className="flex w-fit ">
                <div></div>
                <div className="flex items-center">
                    <button className="bg-red-500 px-3 py-4 text-white rounded-full">send</button>
                </div>
            </div>
        </div>
    )
}

export default MainChat