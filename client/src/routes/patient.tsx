import Billing from "../components/Patient/Billing/Billing";
import Profile from "../components/Patient/Profile";
import Surgery from "../components/Patient/Surgery/Surgery";
import PatientChats from "../components/Patient/chats/PatientChats";
import Medics from "../components/Patient/medics/Medics";
import Settings from "../components/Patient/settings/Settings";
import { RouteType } from "../types/routerTypes";

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
