import { UserTemplate } from "../Dashboard/DoctorMiniList"
import { UserTemplateStyle } from "../../../types/hardcoded/styleEnum"

function AppoientmentModel() {
    const { ROW } = UserTemplateStyle

    return (
        <>
            <div className="flex flex-row justify-between title">
                <h1 className="text-lg font-medium px-4 py-2">Appoinement Request</h1>
                <UserTemplate details={{name: 'siby john', details: '9:00pm', style: '', mainStyle: ROW }} />
            </div>
            <div className=" h-[70%] w-[90%] px-2 py-3">
                <p className="text-[14px]">
                Dear boi iam strugging with crippling depression and it was sis
                </p>
            </div>
        </>
    )
}

function DoctorRegisterModel() {
    return (
        <>
            <div className="flex  w-full items-start title">
                <h1 className="text-lg font-medium px-4 py-2">Doctor Register</h1>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[70%] w-[90%] px-2 py-3">
                <DoctorInfo data={{title: 'Name', content: 'Dr Siby John'}} />
                <DoctorInfo data={{title: 'Degree', content: 'MBBS MD'}} />
                <DoctorInfo data={{title: 'Email', content: 'siby@gmail.com'}} />  
                <DoctorInfo data={{title: 'Place', content: 'Trivandrum'}} />
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