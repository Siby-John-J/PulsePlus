import { RouteType } from "../types/routerTypes";
import Appoientment from "../components/Doctor/Appointements/Appoientment";
import Dashboard from "../components/Doctor/Dashboard/Dashboard";
import Patients from "../components/Doctor/PatientsList/PatientsList";
import PatientDetails from "../components/Doctor/PatientsList/PatientDetails/PatientDetails";
import Groups from "../components/Doctor/Groups/Groups";
import Surgery from "../components/Doctor/Surgery/Surgery";
import DoctorChat from "../components/Doctor/Chat/DoctorChat";
import Billing from "../components/Doctor/Billing/Billing";

export const doctorRoutes: RouteType[] = [
    {
        path: "dashboard",
        component: Dashboard,
    },
    {
        path: "appointments",
        component: Appoientment,
    },
    {
        path: "patients",
        component: Patients,
    },
    {
        path: "groups",
        component: Groups,
    },
    {
        path: "chats",
        component: DoctorChat,
    },
    {
        path: "surgery",
        component: Surgery,
    },
    {
        path: "billing",
        component: Billing,
    },
    {
        path: "patients/:id",
        component: PatientDetails,
    },
];
