import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root/Root';
import Banner from '../Layout/Banner/Banner';
import AllServices from '../Layout/AllServices';
import ServiceDetail from '../Layout/ServiceDetail';
import AddServices from '../Layout/AddServices';
import Login from '../Layout/Login';
import SignUp from '../Layout/SignUp';

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
            },
            {
                path: "/detail",
                element: <ServiceDetail></ServiceDetail>,
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
        ]
    }
])

export default Routes;