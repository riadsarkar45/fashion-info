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
                element: <ServiceDetail></ServiceDetail>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: "/add-service",
                element: <AddServices></AddServices>
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
                element: <MyServices></MyServices>
            },
            {
                path: "/update-serv/:id",
                element: <UpdateServ></UpdateServ>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    }
])

export default Routes;