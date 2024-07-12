import { AppointType } from '../../../types/appoientTypes'
import './Messages.css'
import { AppoientmentModel, DoctorRegisterModel, SurgeryRegisterModel } from './Models'

function MessageData(props: any) {    
    const style = "w-full flex flex-col items-center h-[10em] bg-white rounded-md shadow-md mb-3 "
    const opt =  props.status === 'pending' ? 'cursor-grab' : ' '

    return (
        <div draggable={props.status === 'pending' ? "true" : "false"} 
            onDragStart={e => setData(e, props.data)}
            className={style + opt}
            >
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
