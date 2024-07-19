import { UserTemplate } from "../Dashboard/DoctorMiniList"
import { UserTemplateStyle } from "../../../types/hardcoded/styleEnum"
import { AppointType } from "../../../types/appoientTypes"
import { useNavigate } from "react-router"

function AppoientmentModel(props: {
    data: AppointType
}) {
    const { ROW } = UserTemplateStyle
    const navigate = useNavigate()

    return (
        <>
            <div className="flex flex-row justify-between title">
                <h1 className="text-lg font-medium px-4 py-2">Appoinement Request</h1>
                <div onClick={e => {
                    navigate(`/admin/patient/${props.data.senderId}`)
                }}>
                    <UserTemplate details={{name: 'siby john', details: '9:00pm', style: '', mainStyle: ROW }} />
                </div>
            </div>
            <div className=" h-[70%] w-[90%] px-2 py-3">
                <p className="text-[14px]">
                    {props.data.content}
                </p>
            </div>
        </>
    )
}

function DoctorRegisterModel(dat: any) {
    const { data } = dat
    
    return (
        <>
            <div className="flex  w-full items-start title">
                <h1 className="text-lg font-medium px-4 py-2">Doctor Register</h1>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[70%] w-[90%] px-2 py-3">
                <DoctorInfo data={{title: 'Name', content: data.name}} />
                <DoctorInfo data={{title: 'Degree', content: data.degree}} />
                <DoctorInfo data={{title: 'Department', content: data.department}} />  
                {/* <DoctorInfo data={{title: 'Place', content: 'Trivandrum'}} /> */}
            </div>
        </>
    )
}

function DoctorInfo(props: any) {
    const { title, content } = props.data

    return (
        <div className="flex flex-row items-center justify-between overflow-hidden">
            <h1 className="text-blue-800 font-medium">{title}</h1>
            <p className="text-[14px]">{content}</p>
        </div>
    )
}

function SurgeryRegisterModel() {
    return (
        <>
            <div className="flex  w-full items-start title">
                <h1 className="text-lg font-medium px-4 py-2">Surgery Register</h1>
            </div>
            <div className="h-[70%] w-[90%] px-2 py-3">
                <p>
                    Dear Admin
                </p>
            </div>
        </>
    )
}

function AccountRecoverRegisterModel() {
    return (
        <>
        
        </>
    )
}

export {
    AppoientmentModel,
    DoctorRegisterModel,
    SurgeryRegisterModel,
    AccountRecoverRegisterModel
}