import './Messages.css'
import { AppoientmentModel, DoctorRegisterModel } from './Models'

function MessageData(props: any) {
    const style = "w-full flex flex-col items-center h-[10em] bg-white rounded-md shadow-md mb-3 "
    const opt =  props.status === 'pending' ? 'cursor-grab' : ' '

    return (
        <div draggable={ props.status === 'pending' ? "true" : "false" }
            onDragStart={e => {
                if(props.data.name) {
                    setData(e, {...props.data, type: 'register'})
                } else {
                    setData(e, {...props.data, type: 'appointment'})
                }
            }}
            className={ style + opt }
            >
                {
                    props.data.name ?
                    <DoctorRegisterModel data={props.data} />:
                    <AppoientmentModel data={props.data} />
                }
            {/* <SurgeryRegisterModel /> */}
        </div>
    )
}

const setData = (e: React.DragEvent<HTMLDivElement>, data: object) => {    
    e.dataTransfer.setData('text', JSON.stringify(data))
}

export default MessageData
