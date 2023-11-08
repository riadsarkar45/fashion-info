import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root/Root';
import AllServices from '../Layout/AllServices';
import ServiceDetail from '../Layout/ServiceDetail';
import AddServices from '../Layout/AddServices';
import Login from '../Layout/Login';
import SignUp from '../Layout/SignUp';
import MyServices from '../PrivateRoute/MyServices';
import UpdateServ from '../PrivateRoute/UpdateServ';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import MyShedule from '../PrivateRoute/MyShedule';
import Services from '../Layout/Services';
import Blog from '../PrivateRoute/Blog';
import ErrorPage from '../Layout/ErrorPage';

const Routes = createBrowserRouter([
    {
        path: "/", 
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Services></Services>
            },
            {
                path: "/services",
                element: <AllServices></AllServices>,
                loader: () => fetch(`https://assignment-11-server-one-sandy.vercel.app/services`)
            },
            {
                path: "/detail/:id",
                element: <PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute>,
                loader: ({params}) => fetch(`https://assignment-11-server-one-sandy.vercel.app/services/${params.id}`)
            },
            {
                path: "/add-service",
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <SignUp></SignUp>
            },
            {
                path: "/my-services",
                element: <PrivateRoute><MyServices></MyServices></PrivateRoute>
            },
            {
                path: "/my-shedule",
                element: <PrivateRoute><MyShedule></MyShedule></PrivateRoute>
            },
            {
                path: "/update-serv/:id",
                element: <PrivateRoute><UpdateServ></UpdateServ></PrivateRoute>,
                loader: ({params}) => fetch(`https://assignment-11-server-one-sandy.vercel.app/services/${params.id}`)
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            }
        ]
    }
])

export default Routes;