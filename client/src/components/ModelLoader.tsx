import EditDetails from "./Patient/PopUp/EditDetails";
import PopUp from "./Patient/PopUp/PopUp";
import NotFilledDetailsWarning from "./Patient/PopUp/NotFilledDetailsWarning";
import AppoinetmentFillup from "./Patient/PopUp/AppoinetmentFillup";
import CannotSendAppointmentWarning from "./Patient/PopUp/CannotSendAppointmentWarning";
import { useSelector } from "react-redux";
import CreateNote from "./Patient/PopUp/CreateNote";
import AcceptAppointment from "./Admin/PopUp/AcceptAppointment";
import Notification from "./Patient/PopUp/Notification";

function PatientModelLoader() {
    const popupState = useSelector((state: any) => state);

    return (
        <>
            {popupState.patientDetailPopupReducer.isLoad && (
                <PopUp component={<EditDetails />} />
            )}
            {popupState.notFilledSliceReducer.isLoad && (
                <PopUp component={<NotFilledDetailsWarning />} />
            )}
            {popupState.appointmentFillupReducer.isLoad && (
                <PopUp component={<AppoinetmentFillup />} />
            )}
            {popupState.notSendAppoinetmentReducer.isLoad && (
                <PopUp component={<CannotSendAppointmentWarning />} />
            )}
            {popupState.notesPopupReducer.isLoad && (
                <PopUp component={<CreateNote />} />
            )}
            {popupState.nottifcationReducer.isLoad && (
                <PopUp component={<Notification />} />
            )}
        </>
    );
}

function AdminModelLoader() {

    return (
        <>
            {
                // <PopUp component={<AcceptAppointment />} />
            }
        </>
    )
}

export {
    PatientModelLoader,
    AdminModelLoader
}
