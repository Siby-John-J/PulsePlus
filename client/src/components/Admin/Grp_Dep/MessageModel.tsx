import { UserTemplate } from "../Dashboard/DoctorMiniList"
import { AppoientmentModel } from "../Messages/Models"
import { UserTemplateStyle } from "../../../types/hardcoded/styleEnum"
import "./Grp_Dep.css"

function MessageBody() {
    const { ROW } = UserTemplateStyle

    return (
        <div className="px-3 border-black border-[1px] mx-3 mt-3 rounded-md py-2">
            <div className="flex flex-row justify-between">
                <h1 className="text-md font-medium pb-2">Appoinement Request</h1>
                <div className="holder">
                <UserTemplate details={{name: 'Siby John', details: '23', style: '', mainStyle: ROW}} />
                </div>
            </div>
            <p className="text-[14px]">
                Dear boi iam strugging with crippling depression and it was sis
            </p>
        </div>
    )
}

export default MessageBody
