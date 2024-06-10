import EditDetails from './EditDetails'
import PopUp from './PopUp'
import NotFilledDetailsWarning from './NotFilledDetailsWarning'
import AppoinetmentFillup from './AppoinetmentFillup'
import CannotSendAppointmentWarning from './CannotSendAppointmentWarning'
import { useSelector } from 'react-redux'
import CreateNote from './CreateNote'

function PatientModelLoader() {
    const popupState = useSelector((state: any) => state)

    console.log(popupState.notesPopupReducer)
    

    return (
        <>
        {
            popupState.patientDetailPopupReducer.isLoad && <PopUp component={<EditDetails/>} />
        }
        {
            popupState.notFilledSliceReducer.isLoad && <PopUp component={<NotFilledDetailsWarning/>} />
        }
        {
            popupState.appointmentFillupReducer.isLoad && <PopUp component={<AppoinetmentFillup/>} />
        }
        {
            popupState.notSendAppoinetmentReducer.isLoad && <PopUp component={<CannotSendAppointmentWarning/>} />
        }
        {
            popupState.notesPopupReducer.isLoad && <PopUp component={<CreateNote />} />
        }
        </>
    )
}

export default PatientModelLoader