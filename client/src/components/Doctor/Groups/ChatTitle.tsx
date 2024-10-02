import { useState } from "react"
import { UserTemplateStyle } from "../../../types/hardcoded/styleEnum"
import { UserTemplate } from "../../Admin/Dashboard/DoctorMiniList"
import AttachMents from "../../Admin/Grp_Dep/Info/AttachMents"
import MultiMedia from "../../Admin/Grp_Dep/Info/MultiMedia"
import { Link } from "react-router-dom"

function ChatTitle() {
  return (
    <div className='h-full w-full flex flex-col justify-between'>
        <ChatTitleHeading />
        <ChatTitleDetails />
        <SettingsOption />
    </div>
  )
}

function SettingsOption() {
    return (
        <div className="w-full h-fit">
            <h1 className=" mx-3 py-1 font-medium text-[14px]">settings</h1>
        </div>
    )
}

function ChatTitleHeading() {
    return (
        <div className="w-full h-[42%] border-b-[1px] border-gray-500">
            <div className="bg-black w-full h-[12em] rounded-b-md"></div>
            <div className="flex flex-col justify-evenly items-center translate-y-[-4em] bg-gray-300 mx-[15%] w-[70%] h-fit rounded-md">
                <h1 className="font-medium text-[20px]">Flexer</h1>
                <h1 className="text-[12px] text-center h-[3em] overflow-hidden">this is a family friendly group bitch </h1>
                <h1 className="font-medium text-[15px] mt-2 mb-4">09/11/2000</h1>
                {/* <div className="h-[3em] w-full"></div> */}
            </div>
        </div>
    )
}

function ChatTitleDetails() {
    const { COLUMN,  ROW} = UserTemplateStyle
    const style = ROW + ' bg-gray-100 shadow-md py-1 px-2 rounded-md'

    // Fetch only 5 of them
    const [data, setData] = useState<{name: string, details: string}[]>([
        { name: 'Dr siby john', details: 'MBBS' },
        { name: 'Dr nila vishal', details: 'MBBS MD' },
        { name: 'Dr meera john', details: 'cardiologist' },
        { name: 'Dr alan vishal', details: 'neurologist' },
        // { name: 'Dr armani', details: 'MBBS' },
        { name: 'Dr anya forger', details: 'MBBS MB' },
    ])

    return (
        <div className="w-full">
            <div className=" w-full py-2 px-2 h-fit ">
                <div className="flex flex-row justify-between items-center">
                <h1 className="font-medium pb-2">User information</h1>
                <Link to={'/doctor/groups/settings?id=' + 'memes'} >
                    View All
                </Link>
                {/* <a href=></a> */}
                </div>
                <div className="h-fit flex flex-col gap-2">
                    {
                        data.map((data: object) => {
                            return (
                                <UserTemplate details={{name: data.name, details: data.details, style: 'text-[12px]', mainStyle: style}} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

function SmallInfo(props: { data: { title: string, info: string } }) {
    const { title, info } = props.data

    return (
        <div className="flex flex-col py-2">
            <h1 className="text-[14px] text-gray-500">{title}</h1>
            <p className="">{info}</p>
        </div>
    )
}

export default ChatTitle