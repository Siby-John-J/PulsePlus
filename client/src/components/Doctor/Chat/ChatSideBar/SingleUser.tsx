import { useDispatch } from "react-redux"
import { UserTemplateStyle } from "../../../../types/hardcoded/styleEnum"
import { UserTemplate } from "../../../Admin/Dashboard/DoctorMiniList"
import { changeChatView } from "../../../../redux/slices/doctor/textChatSlice"

function SingleUser(props: { data: any }) {
    const { ROW }  = UserTemplateStyle
    const dispatch = useDispatch()
    // const border = "border-l-4 border-red-500"
    let message = ''
    
    const len = props.data.data.length
    if(len > 0) {
      message = props.data.data[len - 1]['p2'] ? props.data.data[len - 1]['p2'] : props.data.data[len - 1]['p1']
    }
    
    return (
      <div
        onClick={e => {
          dispatch(changeChatView(props.data))
        }} 
        className={"bg-gray-200 pt-3 pl-4 flex flex-col justify-evenly cursor-pointer" + ''}>
          <UserTemplate details={{name: 'props.data.id', details: message, style: 'text-[12px] overflow-hidden', mainStyle: ROW}} />
          <div className="bg-gray-700 w-[90%] h-[1px] mt-3"></div>
      </div>
    )
}

export default SingleUser