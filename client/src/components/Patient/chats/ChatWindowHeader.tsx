import { UserTemplate } from "../../Admin/Dashboard/DoctorMiniList"
import { UserTemplateStyle } from "../../../types/hardcoded/styleEnum"
import '../style.css'

function ChatWindowHeader(props: { details: string }) {
  const { ROW } = UserTemplateStyle
  
  return (
    <div className="w-[100%] h-[12%] border-black text-black border-b-[1px] flex flex-row items-center justify-between px-7">
      <div className="c-win-head">
        <UserTemplate details={{name: props.details, details: 'Online', style: 'text-[0.8em] font-light', mainStyle: ROW}} />
      </div>
      <div className="bg-green-300 h-[100%] w-[30%]">
      
      </div>
    </div>
  )
}

export default ChatWindowHeader