import EditDetails from "./Patient/PopUp/EditDetails";
import PopUp from "./Patient/PopUp/PopUp";
import NotFilledDetailsWarning from "./Patient/PopUp/NotFilledDetailsWarning";
import AppoinetmentFillup from "./Patient/PopUp/AppoinetmentFillup";
import CannotSendAppointmentWarning from "./Patient/PopUp/CannotSendAppointmentWarning";
import { useSelector } from "react-redux";
import CreateNote from "./Patient/PopUp/CreateNote";
import AcceptAppointment from "./Admin/PopUp/AcceptAppointment";
import SendAppointment from "./Patient/PopUp/SendAppointment";
import Notification from "./Patient/PopUp/Notification";
import AccountExists from "./Patient/PopUp/AccountExists";
import AppointmentPayment from "./Patient/PopUp/AppointmentPayment";
import Call from "./Patient/PopUp/Call";
import Incoming from "./Patient/PopUp/Incoming";

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

function DoctorModelLoader() {
    const popupState = useSelector((state: any) => state)

    return (
        <>
            {
                popupState.appointPaymentReducer.turnOn && (
                    <PopUp layout={true} component={<AppointmentPayment />} />
                    // <PopUp component={<SendAppointment />} />
                )
            }
        </>
    )
}

function AdminModelLoader() {
    const popupState = useSelector((state: any) => state);

    return (
        <>
            {
                popupState.appointmentAdminReducer.isOn && (
                    <PopUp layout={true} component={<SendAppointment />} />
                )
            }
        </>
    )
}

function GlobalModelLoader() {
    const popupState = useSelector((state: any) => state);

    return (
        <>
            {
                popupState.accountExistsReducer.exists && (
                    <PopUp component={<AccountExists />} />
                )
            }
            {
                popupState.callReducer.isCallOn && (
                    <PopUp layout={true} component={<Call />} />
                )
            }
            {
                popupState.incomingReducer.isState && (
                    <PopUp layout={true} component={<Incoming />} />
                )
            }
        </>
    )
}

export {
    PatientModelLoader,
    AdminModelLoader,
    DoctorModelLoader,
    GlobalModelLoader
}
