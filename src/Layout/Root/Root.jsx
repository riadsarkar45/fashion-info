import Navebar from '../Navbar/Navebar';
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Root = () => {
    return (
        <div>
            <Navebar></Navebar>
            <ToastContainer />
            <Outlet></Outlet>
        </div>
    );
};

export default Root;