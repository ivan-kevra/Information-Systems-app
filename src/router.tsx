import { createBrowserRouter, RouteObject, RouterProvider, Outlet, Navigate } from 'react-router-dom'
import { Login } from './pages/login/login'

import { Profile } from './pages/profile/profile'
import { TableSystem } from './pages/tableSystem/tableSystem'
import { AppRootStateType } from './app/store'
import { useSelector } from 'react-redux';

const publicRoutes: RouteObject[] = [
    {
        path: '/login',
        element: <Login />,
    },
]

const privateRoutes: RouteObject[] = [
    {
        path: '/',
        element: <Profile />,
    },
    {
        path: '/tableSystem',
        element: <TableSystem />,
    },

]



function PrivateRoutes() {
    const auth = useSelector((state: AppRootStateType) => state.auth)
    const isAuthenticated = auth.isAuthenticated

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