import { AppointType } from '../../../types/appoientTypes'
import './Messages.css'
import { AppoientmentModel, DoctorRegisterModel, SurgeryRegisterModel } from './Models'

function MessageData(props: any) {    
    return (
        <div draggable="true" 
            onDragStart={e => setData(e, props.data)}
            className="w-full flex flex-col items-center h-[10em] bg-white cursor-grab rounded-md shadow-md mb-3">
            <AppoientmentModel data={props.data} />
            {/* <DoctorRegisterModel /> */}
            {/* <SurgeryRegisterModel /> */}
        </div>
    )
}

const setData = (e: React.DragEvent<HTMLDivElement>, data: AppointType) => {    
    e.dataTransfer.setData('text', JSON.stringify(data))
}

export default MessageData
