import './Messages.css'
import { AppoientmentModel, DoctorRegisterModel, SurgeryRegisterModel } from './Models'

function MessageData() {

    return (
        <div className="w-full flex flex-col items-center h-[10em] bg-white cursor-grab rounded-md shadow-md mb-3">
            {/* <AppoientmentModel /> */}
            {/* <DoctorRegisterModel /> */}
            <SurgeryRegisterModel />
        </div>
    )
}

export default MessageData
