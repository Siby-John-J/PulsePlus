import { lazy } from "react"
import { RouteType } from "../types/routerTypes"

const Dashboard = lazy(() => import("../components/Admin/Dashboard/Dashboard"))
const Doctors = lazy(() => import("../components/Admin/Doctors/Doctors"))
const Feed_Rate = lazy(() => import("../components/Admin/Feed_Rate/Ratings"))
const Grp_Dep = lazy(() => import("../components/Admin/Grp_Dep/Grp_Dep"))
const Messages = lazy(() => import("../components/Admin/Messages/Messages"))
const Patients = lazy(() => import("../components/Admin/Patients/Patients"))
const SinglePatient = lazy(() => import("../components/Admin/Patients/SinglePatient/SinglePatient"))  
const Payments = lazy(() => import("../components/Admin/Payments/Payments"))

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
