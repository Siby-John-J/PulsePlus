import { lazy } from "react";
import { RouteType } from "../types/routerTypes";

const Billing = lazy(() => import("../components/Patient/Billing/Billing"))
const Profile = lazy(() => import("../components/Patient/Profile/Profile"))
const Surgery = lazy(() => import("../components/Patient/Surgery/Surgery"))
const PatientChats = lazy(() => import("../components/Patient/chats/PatientChats"))

// import Medics from "../components/Patient/medics/Medics";
// import Settings from "../components/Patient/settings/Settings";

export const patientRoute: RouteType[] = [
    {
        path: 'profile',
        component: Profile
    },
    {
        path: 'chat',
        component: PatientChats
    },
    {
        path: 'surgery',
        component: Surgery
    },
    {
        path: 'billing',
        component: Billing
    }
]
