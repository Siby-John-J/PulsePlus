import { useState } from "react"
import { ChatTextHolderStyle } from "../../../types/hardcoded/styleEnum"
import { UserTemplateStyle } from "../../../types/hardcoded/styleEnum"
import { UserTemplate } from "../../Admin/Dashboard/DoctorMiniList"
import Appointment from "../../Admin/Grp_Dep/DataBody/Appointment"
import MultiMedia from "../../Admin/Grp_Dep/Info/MultiMedia"
import './MainChat.css'
import ChatData from "../../Admin/Grp_Dep/DataBody/ChatData"
import GroupPoll from "../../Common/GroupPoll"
import { useDispatch, useSelector } from "react-redux"
import { pollOn } from "../../../redux/slices/pollSlice"
import { loadOn } from "../../../redux/slices/loadMediaSlice"
import { hidpOn } from "../../../redux/slices/hiddenMessageSlice"

function MainChat(props: { setExpand: Function, expand: boolean }) {
  return (
    <div className="w-[100%] h-[100%] flex flex-col">
        <ChatHeader expand={props.expand} setExpand={props.setExpand} />
        <ChatBody />
        <ChatFooter />
    </div>
  )
}

function ChatHeader(props: { setExpand: Function, expand: boolean }) {
    const { ROW } = UserTemplateStyle
    let style = 'w-[20%]'
    if(props.expand) style = 'w-[30%]'

    return (
        <div className="w-[100%] h-[15%] flex flex-row justify-between px-6 border-gray-400 border-b-[1px]">
            <div className="scale-[120%] mt-7">
                <UserTemplate details={{name: 'SOLID', details: 'Coding', style: 'text-light text-gray-500', mainStyle: ROW}} />
            </div>
            <div className={" h-[100%] flex flex-row items-center justify-evenly " + style}>
                <div className="bg-black w-[3em] h-[3em] rounded-full"></div>
                <div className="bg-black w-[3em] h-[3em] rounded-full"></div>
                <div 
                    onClick={e => props.setExpand((prev: boolean) => !prev)}
                    className="bg-black w-[3em] h-[3em] rounded-full"></div>
            </div>
        </div>
    )
}

function ChatBody() {
    const [chats, setChats] = useState([
        {
          info: 'lwal',
          type: 'text'
        },
        {
          info: 'lwal',
          type: 'image'
        }
    ])
    
    return (
        <div className="w-[100%] h-[75%] overflow-scroll text_holder shadow-md">
            {
            chats.map(data => <ChatData data={data}/>)
            }
            <GroupPoll />
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
    const dispatch = useDispatch()
    const popupState = useSelector((state: any) => state)
    let style = 'bg-red-500'
    
    if(popupState.hiddenReducer.data.length > 0) style = 'bg-blue-500'  

    return (
        <div className="w-[100%] h-[10%] flex flex-row border-t-[1px] border-gray-400">
            <div className="flex w-full items-center px-8">
            <div onClick={e => dispatch(hidpOn())} className="bg-purple-500 w-10 h-10 rounded-md overflow-hidden"></div>
                <input className="w-[100%] h-[2em] cursor-text outline-none px-4" type="text" placeholder="Type a message here" />
            </div>
            <div className="flex w-fit items-center">
                <div className="flex justify-evenly items-center px-2 w-[10em]">
                    <input onChange={e => {
                        dispatch(loadOn({file: e.target.files}))
                        // console.log(e.target.files)
                    }} multiple type="file" className="bg-black w-10 h-10 rounded-full overflow-hidden fileLoader" />
                    <div onClick={e => dispatch(pollOn())} className="bg-black w-10 h-10 rounded-full"></div>
                    <button
                        onClick={e => {
                            console.log(popupState.hiddenReducer.data)
                        }}
                        className={style + " px-2 shadow-md py-3 text-white rounded-full"}>send</button>
                </div>
            </div>
        </div>
    )
}

export default MainChat