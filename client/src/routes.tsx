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
    // {
    //     path: '/admin/dashboard',
    //     component: Admin
    // },
    {
        path: "*",
        component: NotFound,
    },
];
