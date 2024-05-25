import { createBrowserRouter, RouteObject, RouterProvider, Outlet, Navigate } from 'react-router-dom'
import { Login } from './pages/login/login'

import { Profile } from './pages/profile/profile'
import { TableSystem } from './pages/tableSystem/tableSystem'

const publicRoutes: RouteObject[] = [
    {
        path: '/login',
        element: <Login />,
    },
]

const privateRoutes: RouteObject[] = [
    {
        path: '/',
        element: <TableSystem />,
    },
    {
        path: '/profile',
        element: <Profile />,
    },
]



function PrivateRoutes() {
    const isAuthenticated = false

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

const router = createBrowserRouter([
    {
        element: <PrivateRoutes />,
        children: privateRoutes,
    },
    ...publicRoutes,
])


export const Router = () => {
    return <RouterProvider router={router} />
}