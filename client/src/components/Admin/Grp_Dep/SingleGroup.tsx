import { UserTemplate } from "../Dashboard/DoctorMiniList"
import { UserTemplateStyle } from "../../../types/hardcoded/styleEnum"
import { ChatTextHolder } from "../../Doctor/Groups/MainChat"

function SingleGroup() {
  return (
    <div className=" w-[100%] h-[100%] flex flex-col">
        <GroupHeader />
        <GroupBody />
        <GroupFooter />
    </div>
  )
}

function GroupHeader() {
  const { ROW } = UserTemplateStyle
  return (
    <div className="border-black border-b-[2px] h-[13%]">
      <UserTemplate details={{name: 'hiScream', details: '34 Members', style: '', mainStyle: ROW + " py-2 px-2"}} />
    </div>
  )
}

function GroupBody() {
  return (
    <div className="h-[86%]">
      <ChatTextHolder part={'incoming'} />
      <ChatTextHolder part={'outgoing'} />
    </div>
  )
}

function GroupFooter() {
  return (
    <div className="border-black border-t-[2px] h-[13%] flex flex-row px-4 items-center justify-between">
      <input type="text" className="w-[30em] border-black border-[1px] px-2 outline-none py-2 rounded-md"/>
      <div className="flex flex-row justify-end w-[10em]">
      <button className="bg-blue-500 rounded-md text-white mx-3 px-5 py-2 ">Send</button>
      <button className="bg-blue-500 rounded-md text-white px-4 py-2 ">+</button>
      </div>
    </div>
  )
}

export default SingleGroup
