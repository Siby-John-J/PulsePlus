import Dashboard from "../components/Admin/Dashboard/Dashboard"
import Doctors from "../components/Admin/Doctors/Doctors"
import Feed_Rate from "../components/Admin/Feed_Rate/Ratings"
import Grp_Dep from "../components/Admin/Grp_Dep/Grp_Dep"
import Messages from "../components/Admin/Messages/Messages"
import Patients from "../components/Admin/Patients/Patients"
import SinglePatient from "../components/Admin/Patients/SinglePatient/SinglePatient"
import Payments from "../components/Admin/Payments/Payments"
import { RouteType } from "../types/routerTypes"

export const adminRoutes: RouteType[] = [
    {
        path: 'dashboard',
        component: Dashboard,
    },
    {
        path: 'patients',
        component: Patients
    },
    {
        path: 'doctors',
        component: Doctors
    },
    {
        path: 'messages',
        component: Messages
    },
    {
        path: 'grp_dep',
        component: Grp_Dep
    }, 
    {
        path: 'payments',
        component: Payments
    },
    {
        path: 'ratings',
        component: Feed_Rate
    },
    {
        path: 'patient/:id',
        component: SinglePatient
    }
]
