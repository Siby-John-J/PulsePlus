import { lazy } from "react";
import NotFound from "./components/404";
import Auth from "./components/Auth/Auth";

const Patient = lazy(() => import("./components/Patient/Patient"));

import { RouteType } from "./types/routerTypes";
import Doctor from "./components/Doctor/Doctor";
import Admin from "./components/Admin/Admin";

import Login from "./components/Auth/Login";
import LoginBannerIcon from "./Icons/login";

import { Register, RegisterBanner } from "./components/Auth/Register";
import RegisterForm from "./components/Auth/Register";
import { doctorRoutes } from "./routes/doctor";
import AdminLogin from "./components/Auth/AdminLogin";
import Processing from "./components/Auth/Processing";
import PaymentSuccess from "./components/Patient/Payment/PaymentSuccess";
import PaymentFailed from "./components/Patient/Payment/PaymentFailed";
import GroupSettings from "./components/Common/Group_Settings/GroupSettings";

export const routeSwitch = {};

export const appRoutes: RouteType[] = [
    {
        path: "/",
        component: Auth,
        childrenProps: [Login, LoginBannerIcon],
    },
    {
        path: "/register",
        component: Register,
        childrenProps: [RegisterForm, RegisterBanner],
    },
    {
        path: "/processing",
        component: Processing
    },
    // {
    //     path: '/patient/profile',
    //     component: Patient,
    //     lazyLoading: true
    // },
    // {
    //     path: '/doctor',
    //     component: Doctor,
    //     childrenRoutes: doctorRoutes
    // },
    {
        path: '/admin',
        component: AdminLogin
    },
    {
        path: 'patient/payment/success',
        component: PaymentSuccess
    },
    {
        path: 'patient/payment/failed',
        component: PaymentFailed
    },
    {
        path: "*",
        component: NotFound,
    },
];
