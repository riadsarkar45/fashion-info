import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root/Root';
import Banner from '../Layout/Banner/Banner';
import AllServices from '../Layout/AllServices';
import ServiceDetail from '../Layout/ServiceDetail';
import AddServices from '../Layout/AddServices';
import Login from '../Layout/Login';
import SignUp from '../Layout/SignUp';
import MyServices from '../PrivateRoute/MyServices';
import UpdateServ from '../PrivateRoute/UpdateServ';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import MyShedule from '../PrivateRoute/MyShedule';

const Routes = createBrowserRouter([
    {
        path: "/", 
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Banner></Banner>,
            },
            {
                path: "/services",
                element: <AllServices></AllServices>,
                loader: () => fetch(`http://localhost:5000/services`)
            },
            {
                path: "/detail/:id",
                element: <PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
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
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    }
])

export default Routes;