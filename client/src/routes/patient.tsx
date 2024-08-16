import { lazy } from "react";
import { RouteType } from "../types/routerTypes";
import PaymentSuccess from "../components/Patient/Payment/PaymentSuccess";
import PaymentFailed from "../components/Patient/Payment/PaymentFailed";
import VideoChat from "../components/Patient/VideoChat/VideoChat";

const Billing = lazy(() => import("../components/Patient/Billing/Billing"))
const Profile = lazy(() => import("../components/Patient/Profile/Profile"))
const Surgery = lazy(() => import("../components/Patient/Surgery/Surgery"))
const PatientChats = lazy(() => import("../components/Patient/chats/PatientChats"))

// import Medics from "../components/Patient/medics/Medics";
// import Settings from "../components/Patient/settings/Settings";

export const patientRoute: RouteType[] = [
    {
        path: 'dashboard',
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
    },
    {
        path: 'video_chat',
        component: VideoChat
    }
]
