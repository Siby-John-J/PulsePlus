import { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { appRoutes } from "./routes";
import { doctorRoutes } from "./routes/doctor";
import { adminRoutes } from "./routes/admin";
import { RouteType } from "./types/routerTypes";
import { patientRoute } from "./routes/patient";

import Doctor from "./components/Doctor/Doctor";
import Admin from "./components/Admin/Admin";
import Patient from "./components/Patient/Patient";

import "./App.css";
import Login from "./components/Auth/Login";
import LoginBannerIcon from "./Icons/login";
import RegisterForm, { RegisterBanner } from "./components/Auth/Register";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex items-center justify-center h-[100vh] w-[100vw]">
            <Suspense>
                <Routes>
                    {appRoutes.map((route: RouteType) => {
                        if (route.path === '/') {
                            return (
                                <Route
                                    path={route.path}
                                    element={
                                        <route.component>
                                            <Login/>
                                            <LoginBannerIcon />
                                        </route.component> 
                                    }
                                />
                            );
                        }
                        return (
                            <Route
                                path={route.path}
                                element={
                                    <route.component>
                                        <RegisterForm/>
                                        <RegisterBanner />
                                    </route.component> 
                                }
                            />
                        );
                    })}
                    ,
                    <Route path="doctor" element={<Doctor />}>
                        {doctorRoutes.map((route: RouteType) => {
                            return (
                                <Route
                                    path={route.path}
                                    element={<route.component />}
                                />
                            );
                        })}
                    </Route>
                    <Route path="admin" element={<Admin />}>
                        {adminRoutes.map((route: RouteType) => {
                            return (
                                <Route
                                    path={route.path}
                                    element={<route.component />}
                                />
                            );
                        })}
                    </Route>
                    <Route path="patient" element={<Patient />}>
                        {patientRoute.map((route: RouteType) => {
                            return (
                                <Route
                                    path={route.path}
                                    element={<route.component />}
                                />
                            );
                        })}
                    </Route>
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
