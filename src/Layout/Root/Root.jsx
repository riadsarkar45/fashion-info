import Navebar from '../Navbar/Navebar';
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Root = () => {
    return (
        <div>
            <Navebar></Navebar>
            <Outlet></Outlet>
            <ToastContainer />
        </div>
    );
};

export default Root;