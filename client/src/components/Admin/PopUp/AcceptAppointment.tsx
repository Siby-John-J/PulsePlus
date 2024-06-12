import { AppointmentAddStyle, UserTemplateStyle } from "../../../types/hardcoded/styleEnum"
import { UserTemplate } from "../Dashboard/DoctorMiniList"

function AcceptAppointment() {
    return (
        <div className="bg-white absolute top-[10%] px-4 py-2 w-fit h-fit rounded-md">
            <div className="flex flex-row  justify-evenly items-center">
                <div className="bg-green-600 rounded-md mr-3 h-[3em] w-[3em]"></div>
                <div className="flex flex-col">
                    <h1 className="text-xl font-medium mb-2">Share Appointment</h1>
                    <p className="font-normal">Manage the appointment by sending to the doctor</p>
                </div>
            </div>
            <div className="my-3">
                <p className="font-semibold mb-2">Search Doctors</p>
                <input 
                    className="outline-none border-[2px] border-gray-500 rounded-md w-[100%] px-2 h-[2.5em]"
                    placeholder="Search of names or departments" 
                    type="text" 
                />
            </div>
            {/* <Searches /> */}
            <div className="flex flex-col">
                <h1 className="font-semibold mb-2">Appoints</h1>
                <Appoints />
                <Appoints />
                <Appoints />
            </div>
            <div className="my-2 flex flex-row justify-between">
                <button className="w-[47%] py-2 rounded-md bg-red-600 text-white">Cancel</button>
                <button className="w-[47%] py-2 rounded-md bg-blue-600 text-white">Done</button>
            </div>
        </div>
    )
}

function Appoints() {
    const { ADDED, NOT_ADDED } = AppointmentAddStyle
    const { ROW } = UserTemplateStyle


    return (
        <>
            <div className="flex flex-row justify-between mb-2">
                <UserTemplate  details={{name: 'Dr Siby John', details: 'nenes', style: 'text-[12px]', mainStyle: ROW}} />
                <button className={NOT_ADDED}>add</button>
            </div>
        </>
    )
}

function Searches() {


    return (
        <div className="bg-gray-50 rounded-md absolute w-[93%] h-[4em]">

        </div>
    )
}

export default AcceptAppointment