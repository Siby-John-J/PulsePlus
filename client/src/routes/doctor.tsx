import VideoChat from "../components/Doctor/VideoChat/VideoChat";
import { RouteType } from "../types/routerTypes";
import { lazy } from "react";

// import Appoientment from "../components/Doctor/Appointements/Appoientment";
// import Dashboard from "../components/Doctor/Dashboard/Dashboard";
// import Patients from "../components/Doctor/PatientsList/PatientsList";
// import PatientDetails from "../components/Doctor/PatientsList/PatientDetails/PatientDetails";
// import Groups from "../components/Doctor/Groups/Groups";
// import Surgery from "../components/Doctor/Surgery/Surgery";
// import DoctorChat from "../components/Doctor/Chat/DoctorChat";
// import Billing from "../components/Doctor/Billing/Billing";

const Billing = lazy(() => import('../components/Doctor/Billing/Billing'))
const Appoientment = lazy(() => import('../components/Doctor/Appointements/Appoientment'))
const Dashboard = lazy(() => import("../components/Doctor/Dashboard/Dashboard"))
const Patients = lazy(() => import("../components/Doctor/PatientsList/PatientsList"))
const PatientDetails = lazy(() => import("../components/Doctor/PatientsList/PatientDetails/PatientDetails"))
const Groups = lazy(() => import("../components/Doctor/Groups/Groups"))
const Surgery = lazy(() => import("../components/Doctor/Surgery/Surgery"))
const DoctorChat = lazy(() => import("../components/Doctor/Chat/DoctorChat"))

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
        path: "video_chat",
        component: VideoChat
    },
    {
        path: "patients/:id",
        component: PatientDetails,
    },
];
