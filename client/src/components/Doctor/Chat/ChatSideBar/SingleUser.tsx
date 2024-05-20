import { UserTemplateStyle } from "../../../../types/hardcoded/styleEnum"
import { UserTemplate } from "../../../Admin/Dashboard/DoctorMiniList"

function SingleUser() {
    const { ROW }  = UserTemplateStyle
    const border = "border-l-4 border-red-500"

  return (
    <div className={"bg-gray-200 pt-3 pl-4 flex flex-col justify-evenly " + ''}>
        <UserTemplate details={{name: 'Siby John', details: 'last text is dis man', style: 'text-[12px]', mainStyle: ROW}} />
        <div className="bg-gray-700 w-[90%] h-[1px] mt-3"></div>
    </div>
  )
}

export default SingleUser