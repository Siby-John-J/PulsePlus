import React from "react"

export type RouteType = {
    path: string,
    component: React.ComponentType<any>
    lazyLoading?: boolean
    childrenProps?: React.ComponentType<any>[]
    childrenRoutes? : RouteType[]
}

// export type ChildrenRouteType {
//     childrenRoutes? : RouteType[]
// }