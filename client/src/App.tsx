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
import { useQuery } from "@tanstack/react-query";
import "./App.css";
import { useQ } from "./hooks/useLogin";

function App() {
    const [count, setCount] = useState({});

    const {
        error,
        status,
        data: user
    } = useQuery({
        queryKey: ['hide'],
        queryFn: useQ
    })
    
    return (
        <>
            {  }
        </>
        // <div className="flex items-center justify-center h-[100vh] w-[100vw]">
        //     <Suspense>
        //         <Routes>
        //             {appRoutes.map((route: RouteType) => {
        //                 return (
        //                     <Route
        //                         path={route.path}
        //                         element={
        //                             <route.component>
        //                                 {route?.childrenProps && (
        //                                     <route.childrenProps />
        //                                 )}
        //                             </route.component>
        //                         }
        //                     />
        //                 );
        //             })}
        //             ,
        //             <Route path="doctor" element={<Doctor />}>
        //                 {doctorRoutes.map((route: RouteType) => {
        //                     return (
        //                         <Route
        //                             path={route.path}
        //                             element={<route.component />}
        //                         />
        //                     );
        //                 })}
        //             </Route>
        //             <Route path="admin" element={<Admin />}>
        //                 {adminRoutes.map((route: RouteType) => {
        //                     return (
        //                         <Route
        //                             path={route.path}
        //                             element={<route.component />}
        //                         />
        //                     );
        //                 })}
        //             </Route>
        //             <Route path="patient" element={<Patient />}>
        //                 {patientRoute.map((route: RouteType) => {
        //                     return (
        //                         <Route
        //                             path={route.path}
        //                             element={<route.component />}
        //                         />
        //                     );
        //                 })}
        //             </Route>
        //         </Routes>
        //     </Suspense>
        // </div>
    );
}

export default App;
